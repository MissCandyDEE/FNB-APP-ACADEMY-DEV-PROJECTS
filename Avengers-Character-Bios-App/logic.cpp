#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <iomanip>

using namespace std;

struct Hero {
    string name;
    int power;
    string specialty;
};

void displayDossier(const vector<Hero>& heroes) {
    cout << "===========================================" << endl;
    cout << left << setw(20) << "HERO NAME" << setw(10) << "POWER" << "SPECIALTY" << endl;
    cout << "===========================================" << endl;
    for (const auto& h : heroes) {
        cout << left << setw(20) << h.name << setw(10) << h.power << h.specialty << endl;
    }
}

int main() {
    vector<Hero> heroes = {
        {"Thor", 98, "God of Thunder"},
        {"Iron Man", 95, "Tech/Intel"},
        {"Cap America", 85, "Tactician"},
        {"Hulk", 100, "Brute Force"}
    };

    // Sorting algorithm: Proves you understand backend efficiency
    sort(heroes.begin(), heroes.end(), [](Hero a, Hero b) {
        return a.power > b.power;
    });

    cout << "\n[S.H.I.E.L.D. RANKING ENGINE ACTIVATED]\n" << endl;
    displayDossier(heroes);
    
    return 0;
}