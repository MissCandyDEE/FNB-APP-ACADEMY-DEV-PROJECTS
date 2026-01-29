# Pine City Zoo | Data Intelligence & Population Analysis
# Purpose: Generate telemetry visualization for the Master Dashboard

# 1. Prepare Data
species <- c("Lions", "Gorillas", "Elephants", "Pandas", "Gemsbok")
population <- c(12, 8, 15, 6, 22)
health_score <- c(0.85, 0.92, 0.88, 1.0, 0.75)

# 2. Create Data Frame
zoo_metrics <- data.frame(species, population, health_score)

# 3. Open Graphics Device (This creates the PNG file)
png("zoo_health_analysis.png", width=800, height=600)

# 4. Generate the Visualization
# Using #C5A059 (Your Gold) and #1a1a1a (Your Dark)
barplot(zoo_metrics$population, 
        names.arg=zoo_metrics$species, 
        col="#C5A059", 
        border="#1a1a1a",
        main="Species Population Density Analysis",
        xlab="Species Classification",
        ylab="Total Headcount",
        cex.main=1.5,
        col.main="#C5A059")

# 5. Save and Close the file
dev.off()

print("Telemetric Chart Generated: zoo_health_analysis.png")