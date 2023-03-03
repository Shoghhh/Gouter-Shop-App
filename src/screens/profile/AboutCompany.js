import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";

export default function AboutCompany() {
    return <View style={Styles.container}>
        <ScrollView style={{paddingHorizontal: 20}}>
            <Text style={[Styles.blackRegular20, { marginVertical: 20 }]}>Кантата</Text>
            <Text style={Styles.blackRegular15}>Мы вынуждены отталкиваться от того, что выбранный нами инновационный путь не даёт нам иного выбора, кроме определения прогресса профессионального сообщества. Вот вам яркий пример современных тенденций — социально-экономическое развитие предполагает независимые способы реализации соответствующих условий активизации. В своём стремлении улучшить пользовательский опыт мы упускаем, что стремящиеся вытеснить традиционное производство, нанотехнологии, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.</Text>
        </ScrollView>
    </View>
}