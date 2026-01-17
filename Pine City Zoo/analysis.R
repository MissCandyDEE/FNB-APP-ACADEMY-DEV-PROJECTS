# Advanced Statistical Analysis for Pine City Zoo
# Demonstrating Data Analytics skills 

species <- c("Lions", "Tigers", "Bears", "Elephants", "Giraffes", "Zebras")
population <- c(12, 8, 15, 6, 10, 25)
health_index <- c(0.85, 0.78, 0.92, 0.88, 0.95, 0.82)

# Create a data frame (Essential R Skill)
zoo_data <- data.frame(species, population, health_index)

# Calculate weighted health average
weighted_health <- sum(zoo_data$population * zoo_data$health_index) / sum(zoo_data$population)

# Generate a High-Quality Plot for the Portfolio
png("zoo_health_analysis.png")
barplot(zoo_data$population, names.arg=zoo_data$species, 
        col=c("#C5A059", "#2C2C2C"), 
        main="Species Demographic & Population Density",
        ylab="Number of Animals", las=2)
dev.off()

print(paste("Total Zoo Health Index:", round(weighted_health, 2)))