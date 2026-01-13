# Zoo Population Analysis
animals <- c(10, 5, 8, 12)
names(animals) <- c("Lions", "Tigers", "Bears", "Elephants")

# Calculate percentage of total population
percent <- round(100*animals/sum(animals), 1)

# Generate simple chart
pie(animals, labels = paste(names(animals), percent, "%"), 
    main="Pine City Zoo Demographic", col=rainbow(4))