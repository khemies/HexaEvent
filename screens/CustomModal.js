const CustomModal = ({
    animationType = "Slide",
    conponent = View,
    visible,
    onDismiss,
    child,
    height,
    width,
    styleModal,

}) => {

    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
           
        >



            <TouchableWithoutFeedback onPress={() => onDismiss()}>
                <View style={[styles.Modal, styleModal]}>
                    <TouchableWithoutFeedback>
                        <View
                            style={[
                                styles.modalInner,
                                height ? { height: height } : { height: adaptToHeight(0.7) },
                                width ? { width: width } : { width: adaptToWidth(0.7) },
                            ]}

                        >
                            
                            {child}
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </TouchableWithoutFeedback>

        <Component/>
         
        
        </Modal >

);
};




export default CustomModal;
