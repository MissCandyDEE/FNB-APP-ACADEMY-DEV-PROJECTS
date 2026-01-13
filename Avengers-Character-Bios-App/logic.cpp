#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

struct Hero {
    std::string name;
    int power;
};
int main() {
    std::vector<Hero> heroes = {{"Thor", 95}, {"Iron Man", 90}, {"Cap", 85}};
    
    // Sort heroes by power level descending
    std::sort(heroes.begin(), heroes.end(), [](Hero a, Hero b) {
        return a.power > b.power;
    });

    std::cout << "Dossier Ranking Optimized:" << std::endl;
    for(auto h : heroes) {
        std::cout << h.name << ": " << h.power << std::endl;
    }
    return 0;
}