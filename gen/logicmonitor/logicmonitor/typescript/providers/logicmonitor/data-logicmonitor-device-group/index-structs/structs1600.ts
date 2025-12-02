import * as cdktf from 'cdktf';
import { DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsToTerraform,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsList,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsToTerraform,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsList,
DataLogicmonitorDeviceGroupExtraServicesREDISCACHE,
dataLogicmonitorDeviceGroupExtraServicesREDISCACHEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesREDISCACHEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesREDISCACHEList,
DataLogicmonitorDeviceGroupExtraServicesREDSHIFT,
dataLogicmonitorDeviceGroupExtraServicesREDSHIFTToTerraform,
dataLogicmonitorDeviceGroupExtraServicesREDSHIFTToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesREDSHIFTList,
DataLogicmonitorDeviceGroupExtraServicesROUTE53,
dataLogicmonitorDeviceGroupExtraServicesROUTE53ToTerraform,
dataLogicmonitorDeviceGroupExtraServicesROUTE53ToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesROUTE53List,
DataLogicmonitorDeviceGroupExtraServicesROUTE53RESOLVER,
dataLogicmonitorDeviceGroupExtraServicesROUTE53RESOLVERToTerraform,
dataLogicmonitorDeviceGroupExtraServicesROUTE53RESOLVERToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesROUTE53RESOLVERList,
DataLogicmonitorDeviceGroupExtraServicesS3,
dataLogicmonitorDeviceGroupExtraServicesS3ToTerraform,
dataLogicmonitorDeviceGroupExtraServicesS3ToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesS3List,
DataLogicmonitorDeviceGroupExtraServicesSAGEMAKER,
dataLogicmonitorDeviceGroupExtraServicesSAGEMAKERToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSAGEMAKERToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSAGEMAKERList,
DataLogicmonitorDeviceGroupExtraServicesSERVICEBUS,
dataLogicmonitorDeviceGroupExtraServicesSERVICEBUSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSERVICEBUSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSERVICEBUSList,
DataLogicmonitorDeviceGroupExtraServicesSES,
dataLogicmonitorDeviceGroupExtraServicesSESToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSESToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSESList,
DataLogicmonitorDeviceGroupExtraServicesSNS,
dataLogicmonitorDeviceGroupExtraServicesSNSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSNSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSNSList,
DataLogicmonitorDeviceGroupExtraServicesSQS,
dataLogicmonitorDeviceGroupExtraServicesSQSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSQSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSQSList,
DataLogicmonitorDeviceGroupExtraServicesSTEPFUNCTIONS,
dataLogicmonitorDeviceGroupExtraServicesSTEPFUNCTIONSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSTEPFUNCTIONSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSTEPFUNCTIONSList,
DataLogicmonitorDeviceGroupExtraServicesSTORAGEACCOUNT,
dataLogicmonitorDeviceGroupExtraServicesSTORAGEACCOUNTToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSTORAGEACCOUNTToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSTORAGEACCOUNTList,
DataLogicmonitorDeviceGroupExtraServicesSWFACTIVITY,
dataLogicmonitorDeviceGroupExtraServicesSWFACTIVITYToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSWFACTIVITYToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSWFACTIVITYList,
DataLogicmonitorDeviceGroupExtraServicesSWFWORKFLOW,
dataLogicmonitorDeviceGroupExtraServicesSWFWORKFLOWToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSWFWORKFLOWToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSWFWORKFLOWList,
DataLogicmonitorDeviceGroupExtraServicesSYNAPSEWORKSPACES,
dataLogicmonitorDeviceGroupExtraServicesSYNAPSEWORKSPACESToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSYNAPSEWORKSPACESToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSYNAPSEWORKSPACESList,
DataLogicmonitorDeviceGroupExtraServicesSqlDATABASE,
dataLogicmonitorDeviceGroupExtraServicesSqlDATABASEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSqlDATABASEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSqlDATABASEList,
DataLogicmonitorDeviceGroupExtraServicesSqlELASTICPOOL,
dataLogicmonitorDeviceGroupExtraServicesSqlELASTICPOOLToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSqlELASTICPOOLToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSqlELASTICPOOLList,
DataLogicmonitorDeviceGroupExtraServicesSqlMANAGEDINSTANCE,
dataLogicmonitorDeviceGroupExtraServicesSqlMANAGEDINSTANCEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesSqlMANAGEDINSTANCEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesSqlMANAGEDINSTANCEList,
DataLogicmonitorDeviceGroupExtraServicesTABLESTORAGE,
dataLogicmonitorDeviceGroupExtraServicesTABLESTORAGEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesTABLESTORAGEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesTABLESTORAGEList,
DataLogicmonitorDeviceGroupExtraServicesTRAFFICMANAGER,
dataLogicmonitorDeviceGroupExtraServicesTRAFFICMANAGERToTerraform,
dataLogicmonitorDeviceGroupExtraServicesTRAFFICMANAGERToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesTRAFFICMANAGERList,
DataLogicmonitorDeviceGroupExtraServicesTRANSITGATEWAY,
dataLogicmonitorDeviceGroupExtraServicesTRANSITGATEWAYToTerraform,
dataLogicmonitorDeviceGroupExtraServicesTRANSITGATEWAYToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesTRANSITGATEWAYList,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALDESKTOP,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALDESKTOPToTerraform,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALDESKTOPToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALDESKTOPList,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINE,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINEList,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESET,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETToTerraform,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETList,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETVm,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETVmToTerraform,
dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETVmToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETVmList } from './structs1200'
import { DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONELB,
dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONELBToTerraform,
dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONELBToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONELBList,
DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONGATEWAY,
dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONGATEWAYToTerraform,
dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONGATEWAYToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONGATEWAYList,
DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONINSIGHTS,
dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONINSIGHTSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONINSIGHTSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONINSIGHTSList,
DataLogicmonitorDeviceGroupExtraServicesAPPSERVICE,
dataLogicmonitorDeviceGroupExtraServicesAPPSERVICEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesAPPSERVICEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesAPPSERVICEList,
DataLogicmonitorDeviceGroupExtraServicesAPPSERVICEPLAN,
dataLogicmonitorDeviceGroupExtraServicesAPPSERVICEPLANToTerraform,
dataLogicmonitorDeviceGroupExtraServicesAPPSERVICEPLANToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesAPPSERVICEPLANList,
DataLogicmonitorDeviceGroupExtraServicesAPPSTREAM,
dataLogicmonitorDeviceGroupExtraServicesAPPSTREAMToTerraform,
dataLogicmonitorDeviceGroupExtraServicesAPPSTREAMToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesAPPSTREAMList,
DataLogicmonitorDeviceGroupExtraServicesATHENA,
dataLogicmonitorDeviceGroupExtraServicesATHENAToTerraform,
dataLogicmonitorDeviceGroupExtraServicesATHENAToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesATHENAList,
DataLogicmonitorDeviceGroupExtraServicesAUTOMATIONACCOUNT,
dataLogicmonitorDeviceGroupExtraServicesAUTOMATIONACCOUNTToTerraform,
dataLogicmonitorDeviceGroupExtraServicesAUTOMATIONACCOUNTToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesAUTOMATIONACCOUNTList,
DataLogicmonitorDeviceGroupExtraServicesAUTOSCALING,
dataLogicmonitorDeviceGroupExtraServicesAUTOSCALINGToTerraform,
dataLogicmonitorDeviceGroupExtraServicesAUTOSCALINGToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesAUTOSCALINGList,
DataLogicmonitorDeviceGroupExtraServicesApiGATEWAY,
dataLogicmonitorDeviceGroupExtraServicesApiGATEWAYToTerraform,
dataLogicmonitorDeviceGroupExtraServicesApiGATEWAYToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesApiGATEWAYList,
DataLogicmonitorDeviceGroupExtraServicesApiMANAGEMENT,
dataLogicmonitorDeviceGroupExtraServicesApiMANAGEMENTToTerraform,
dataLogicmonitorDeviceGroupExtraServicesApiMANAGEMENTToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesApiMANAGEMENTList,
DataLogicmonitorDeviceGroupExtraServicesBACKUPPROTECTEDITEMS,
dataLogicmonitorDeviceGroupExtraServicesBACKUPPROTECTEDITEMSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesBACKUPPROTECTEDITEMSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesBACKUPPROTECTEDITEMSList,
DataLogicmonitorDeviceGroupExtraServicesBLOBSTORAGE,
dataLogicmonitorDeviceGroupExtraServicesBLOBSTORAGEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesBLOBSTORAGEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesBLOBSTORAGEList,
DataLogicmonitorDeviceGroupExtraServicesCLOUDFRONT,
dataLogicmonitorDeviceGroupExtraServicesCLOUDFRONTToTerraform,
dataLogicmonitorDeviceGroupExtraServicesCLOUDFRONTToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesCLOUDFRONTList,
DataLogicmonitorDeviceGroupExtraServicesCLOUDSEARCH,
dataLogicmonitorDeviceGroupExtraServicesCLOUDSEARCHToTerraform,
dataLogicmonitorDeviceGroupExtraServicesCLOUDSEARCHToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesCLOUDSEARCHList,
DataLogicmonitorDeviceGroupExtraServicesCODEBUiLD,
dataLogicmonitorDeviceGroupExtraServicesCODEBUiLDToTerraform,
dataLogicmonitorDeviceGroupExtraServicesCODEBUiLDToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesCODEBUiLDList,
DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESEARCH,
dataLogicmonitorDeviceGroupExtraServicesCOGNITIVESEARCHToTerraform,
dataLogicmonitorDeviceGroupExtraServicesCOGNITIVESEARCHToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESEARCHList,
DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESERVICES,
dataLogicmonitorDeviceGroupExtraServicesCOGNITIVESERVICESToTerraform,
dataLogicmonitorDeviceGroupExtraServicesCOGNITIVESERVICESToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESERVICESList,
DataLogicmonitorDeviceGroupExtraServicesCOGNITO,
dataLogicmonitorDeviceGroupExtraServicesCOGNITOToTerraform,
dataLogicmonitorDeviceGroupExtraServicesCOGNITOToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesCOGNITOList,
DataLogicmonitorDeviceGroupExtraServicesCOSMOSDB,
dataLogicmonitorDeviceGroupExtraServicesCOSMOSDBToTerraform,
dataLogicmonitorDeviceGroupExtraServicesCOSMOSDBToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesCOSMOSDBList,
DataLogicmonitorDeviceGroupExtraServicesDATAFACTORY,
dataLogicmonitorDeviceGroupExtraServicesDATAFACTORYToTerraform,
dataLogicmonitorDeviceGroupExtraServicesDATAFACTORYToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesDATAFACTORYList,
DataLogicmonitorDeviceGroupExtraServicesDIRECTCONNECT,
dataLogicmonitorDeviceGroupExtraServicesDIRECTCONNECTToTerraform,
dataLogicmonitorDeviceGroupExtraServicesDIRECTCONNECTToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesDIRECTCONNECTList,
DataLogicmonitorDeviceGroupExtraDevicesList,
DataLogicmonitorDeviceGroupExtraAccount,
dataLogicmonitorDeviceGroupExtraAccountToTerraform,
dataLogicmonitorDeviceGroupExtraAccountToHclTerraform,
DataLogicmonitorDeviceGroupExtraAccountList,
DataLogicmonitorDeviceGroupExtraDefault,
dataLogicmonitorDeviceGroupExtraDefaultToTerraform,
dataLogicmonitorDeviceGroupExtraDefaultToHclTerraform,
DataLogicmonitorDeviceGroupExtraDefaultList } from './structs0'
import { DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATION,
dataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONToTerraform,
dataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONList,
DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONTASKS,
dataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONTASKSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONTASKSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONTASKSList,
DataLogicmonitorDeviceGroupExtraServicesDOCDB,
dataLogicmonitorDeviceGroupExtraServicesDOCDBToTerraform,
dataLogicmonitorDeviceGroupExtraServicesDOCDBToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesDOCDBList,
DataLogicmonitorDeviceGroupExtraServicesDYNAMODB,
dataLogicmonitorDeviceGroupExtraServicesDYNAMODBToTerraform,
dataLogicmonitorDeviceGroupExtraServicesDYNAMODBToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesDYNAMODBList,
DataLogicmonitorDeviceGroupExtraServicesEBS,
dataLogicmonitorDeviceGroupExtraServicesEBSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesEBSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesEBSList,
DataLogicmonitorDeviceGroupExtraServicesEC2,
dataLogicmonitorDeviceGroupExtraServicesEC2ToTerraform,
dataLogicmonitorDeviceGroupExtraServicesEC2ToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesEC2List,
DataLogicmonitorDeviceGroupExtraServicesECS,
dataLogicmonitorDeviceGroupExtraServicesECSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesECSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesECSList,
DataLogicmonitorDeviceGroupExtraServicesEFS,
dataLogicmonitorDeviceGroupExtraServicesEFSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesEFSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesEFSList,
DataLogicmonitorDeviceGroupExtraServicesELASTICACHE,
dataLogicmonitorDeviceGroupExtraServicesELASTICACHEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesELASTICACHEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesELASTICACHEList,
DataLogicmonitorDeviceGroupExtraServicesELASTICBEANSTALK,
dataLogicmonitorDeviceGroupExtraServicesELASTICBEANSTALKToTerraform,
dataLogicmonitorDeviceGroupExtraServicesELASTICBEANSTALKToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesELASTICBEANSTALKList,
DataLogicmonitorDeviceGroupExtraServicesELASTICSEARCH,
dataLogicmonitorDeviceGroupExtraServicesELASTICSEARCHToTerraform,
dataLogicmonitorDeviceGroupExtraServicesELASTICSEARCHToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesELASTICSEARCHList,
DataLogicmonitorDeviceGroupExtraServicesELASTICTRANSCODER,
dataLogicmonitorDeviceGroupExtraServicesELASTICTRANSCODERToTerraform,
dataLogicmonitorDeviceGroupExtraServicesELASTICTRANSCODERToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesELASTICTRANSCODERList,
DataLogicmonitorDeviceGroupExtraServicesELB,
dataLogicmonitorDeviceGroupExtraServicesELBToTerraform,
dataLogicmonitorDeviceGroupExtraServicesELBToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesELBList,
DataLogicmonitorDeviceGroupExtraServicesEMR,
dataLogicmonitorDeviceGroupExtraServicesEMRToTerraform,
dataLogicmonitorDeviceGroupExtraServicesEMRToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesEMRList,
DataLogicmonitorDeviceGroupExtraServicesEVENTBRIdGE,
dataLogicmonitorDeviceGroupExtraServicesEVENTBRIdGEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesEVENTBRIdGEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesEVENTBRIdGEList,
DataLogicmonitorDeviceGroupExtraServicesEVENTHUB,
dataLogicmonitorDeviceGroupExtraServicesEVENTHUBToTerraform,
dataLogicmonitorDeviceGroupExtraServicesEVENTHUBToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesEVENTHUBList,
DataLogicmonitorDeviceGroupExtraServicesEXPRESSROUTECIRCUiT,
dataLogicmonitorDeviceGroupExtraServicesEXPRESSROUTECIRCUiTToTerraform,
dataLogicmonitorDeviceGroupExtraServicesEXPRESSROUTECIRCUiTToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesEXPRESSROUTECIRCUiTList,
DataLogicmonitorDeviceGroupExtraServicesFILESTORAGE,
dataLogicmonitorDeviceGroupExtraServicesFILESTORAGEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesFILESTORAGEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesFILESTORAGEList,
DataLogicmonitorDeviceGroupExtraServicesFIREHOSE,
dataLogicmonitorDeviceGroupExtraServicesFIREHOSEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesFIREHOSEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesFIREHOSEList,
DataLogicmonitorDeviceGroupExtraServicesFIREWALL,
dataLogicmonitorDeviceGroupExtraServicesFIREWALLToTerraform,
dataLogicmonitorDeviceGroupExtraServicesFIREWALLToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesFIREWALLList,
DataLogicmonitorDeviceGroupExtraServicesFRONTDOORS,
dataLogicmonitorDeviceGroupExtraServicesFRONTDOORSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesFRONTDOORSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesFRONTDOORSList,
DataLogicmonitorDeviceGroupExtraServicesFSX,
dataLogicmonitorDeviceGroupExtraServicesFSXToTerraform,
dataLogicmonitorDeviceGroupExtraServicesFSXToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesFSXList,
DataLogicmonitorDeviceGroupExtraServicesGLUE,
dataLogicmonitorDeviceGroupExtraServicesGLUEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesGLUEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesGLUEList,
DataLogicmonitorDeviceGroupExtraServicesKEYVAULT,
dataLogicmonitorDeviceGroupExtraServicesKEYVAULTToTerraform,
dataLogicmonitorDeviceGroupExtraServicesKEYVAULTToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesKEYVAULTList,
DataLogicmonitorDeviceGroupExtraServicesKINESIS,
dataLogicmonitorDeviceGroupExtraServicesKINESISToTerraform,
dataLogicmonitorDeviceGroupExtraServicesKINESISToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesKINESISList } from './structs400'
import { DataLogicmonitorDeviceGroupExtraServicesKINESISVIdEO,
dataLogicmonitorDeviceGroupExtraServicesKINESISVIdEOToTerraform,
dataLogicmonitorDeviceGroupExtraServicesKINESISVIdEOToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesKINESISVIdEOList,
DataLogicmonitorDeviceGroupExtraServicesLAMBDA,
dataLogicmonitorDeviceGroupExtraServicesLAMBDAToTerraform,
dataLogicmonitorDeviceGroupExtraServicesLAMBDAToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesLAMBDAList,
DataLogicmonitorDeviceGroupExtraServicesLOADBALANCERS,
dataLogicmonitorDeviceGroupExtraServicesLOADBALANCERSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesLOADBALANCERSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesLOADBALANCERSList,
DataLogicmonitorDeviceGroupExtraServicesLOGANALYTICSWORKSPACES,
dataLogicmonitorDeviceGroupExtraServicesLOGANALYTICSWORKSPACESToTerraform,
dataLogicmonitorDeviceGroupExtraServicesLOGANALYTICSWORKSPACESToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesLOGANALYTICSWORKSPACESList,
DataLogicmonitorDeviceGroupExtraServicesLOGICAPPS,
dataLogicmonitorDeviceGroupExtraServicesLOGICAPPSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesLOGICAPPSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesLOGICAPPSList,
DataLogicmonitorDeviceGroupExtraServicesMEDIACONNECT,
dataLogicmonitorDeviceGroupExtraServicesMEDIACONNECTToTerraform,
dataLogicmonitorDeviceGroupExtraServicesMEDIACONNECTToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesMEDIACONNECTList,
DataLogicmonitorDeviceGroupExtraServicesMEDIACONVERT,
dataLogicmonitorDeviceGroupExtraServicesMEDIACONVERTToTerraform,
dataLogicmonitorDeviceGroupExtraServicesMEDIACONVERTToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesMEDIACONVERTList,
DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGELIVE,
dataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGELIVEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGELIVEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGELIVEList,
DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGEVOD,
dataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGEVODToTerraform,
dataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGEVODToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGEVODList,
DataLogicmonitorDeviceGroupExtraServicesMEDIASTORE,
dataLogicmonitorDeviceGroupExtraServicesMEDIASTOREToTerraform,
dataLogicmonitorDeviceGroupExtraServicesMEDIASTOREToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesMEDIASTOREList,
DataLogicmonitorDeviceGroupExtraServicesMEDIATAILOR,
dataLogicmonitorDeviceGroupExtraServicesMEDIATAILORToTerraform,
dataLogicmonitorDeviceGroupExtraServicesMEDIATAILORToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesMEDIATAILORList,
DataLogicmonitorDeviceGroupExtraServicesMQ,
dataLogicmonitorDeviceGroupExtraServicesMQToTerraform,
dataLogicmonitorDeviceGroupExtraServicesMQToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesMQList,
DataLogicmonitorDeviceGroupExtraServicesMSKBROKER,
dataLogicmonitorDeviceGroupExtraServicesMSKBROKERToTerraform,
dataLogicmonitorDeviceGroupExtraServicesMSKBROKERToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesMSKBROKERList,
DataLogicmonitorDeviceGroupExtraServicesMSKCLUSTER,
dataLogicmonitorDeviceGroupExtraServicesMSKCLUSTERToTerraform,
dataLogicmonitorDeviceGroupExtraServicesMSKCLUSTERToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesMSKCLUSTERList,
DataLogicmonitorDeviceGroupExtraServicesMYSql,
dataLogicmonitorDeviceGroupExtraServicesMYSqlToTerraform,
dataLogicmonitorDeviceGroupExtraServicesMYSqlToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesMYSqlList,
DataLogicmonitorDeviceGroupExtraServicesNATGATEWAY,
dataLogicmonitorDeviceGroupExtraServicesNATGATEWAYToTerraform,
dataLogicmonitorDeviceGroupExtraServicesNATGATEWAYToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesNATGATEWAYList,
DataLogicmonitorDeviceGroupExtraServicesNETWORKELB,
dataLogicmonitorDeviceGroupExtraServicesNETWORKELBToTerraform,
dataLogicmonitorDeviceGroupExtraServicesNETWORKELBToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesNETWORKELBList,
DataLogicmonitorDeviceGroupExtraServicesNETWORKINTERFACE,
dataLogicmonitorDeviceGroupExtraServicesNETWORKINTERFACEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesNETWORKINTERFACEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesNETWORKINTERFACEList,
DataLogicmonitorDeviceGroupExtraServicesOPSWORKS,
dataLogicmonitorDeviceGroupExtraServicesOPSWORKSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesOPSWORKSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesOPSWORKSList,
DataLogicmonitorDeviceGroupExtraServicesPOSTGRESql,
dataLogicmonitorDeviceGroupExtraServicesPOSTGRESqlToTerraform,
dataLogicmonitorDeviceGroupExtraServicesPOSTGRESqlToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesPOSTGRESqlList,
DataLogicmonitorDeviceGroupExtraServicesPUBLICIp,
dataLogicmonitorDeviceGroupExtraServicesPUBLICIpToTerraform,
dataLogicmonitorDeviceGroupExtraServicesPUBLICIpToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesPUBLICIpList,
DataLogicmonitorDeviceGroupExtraServicesQUEUESTORAGE,
dataLogicmonitorDeviceGroupExtraServicesQUEUESTORAGEToTerraform,
dataLogicmonitorDeviceGroupExtraServicesQUEUESTORAGEToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesQUEUESTORAGEList,
DataLogicmonitorDeviceGroupExtraServicesRDS,
dataLogicmonitorDeviceGroupExtraServicesRDSToTerraform,
dataLogicmonitorDeviceGroupExtraServicesRDSToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesRDSList,
DataLogicmonitorDeviceGroupExtraServicesRECOVERYPROTECTEDITEM,
dataLogicmonitorDeviceGroupExtraServicesRECOVERYPROTECTEDITEMToTerraform,
dataLogicmonitorDeviceGroupExtraServicesRECOVERYPROTECTEDITEMToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesRECOVERYPROTECTEDITEMList,
DataLogicmonitorDeviceGroupExtraServicesRECOVERYSERVICES,
dataLogicmonitorDeviceGroupExtraServicesRECOVERYSERVICESToTerraform,
dataLogicmonitorDeviceGroupExtraServicesRECOVERYSERVICESToHclTerraform,
DataLogicmonitorDeviceGroupExtraServicesRECOVERYSERVICESList } from './structs800'
export interface DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#collectors DataLogicmonitorDeviceGroup#collectors}
  */
  readonly collectors?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#enabled DataLogicmonitorDeviceGroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collectors: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsToTerraform, false)(struct!.collectors),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collectors: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsToHclTerraform, false)(struct!.collectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectors = this._collectors?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectors.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectors.internalValue = value.collectors;
      this._enabled = value.enabled;
    }
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAY {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#custom_n_s_p_schedule DataLogicmonitorDeviceGroup#custom_n_s_p_schedule}
  */
  readonly customNSPSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#dead_operation DataLogicmonitorDeviceGroup#dead_operation}
  */
  readonly deadOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#device_display_name_template DataLogicmonitorDeviceGroup#device_display_name_template}
  */
  readonly deviceDisplayNameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#disable_stop_terminate_host_monitor DataLogicmonitorDeviceGroup#disable_stop_terminate_host_monitor}
  */
  readonly disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#disable_terminated_host_alerting DataLogicmonitorDeviceGroup#disable_terminated_host_alerting}
  */
  readonly disableTerminatedHostAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#monitoring_region_infos DataLogicmonitorDeviceGroup#monitoring_region_infos}
  */
  readonly monitoringRegionInfos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#monitoring_regions DataLogicmonitorDeviceGroup#monitoring_regions}
  */
  readonly monitoringRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#name_filter DataLogicmonitorDeviceGroup#name_filter}
  */
  readonly nameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#select_all DataLogicmonitorDeviceGroup#select_all}
  */
  readonly selectAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#tags DataLogicmonitorDeviceGroup#tags}
  */
  readonly tags?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#use_default DataLogicmonitorDeviceGroup#use_default}
  */
  readonly useDefault: boolean | cdktf.IResolvable;
  /**
  * normal_collector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#normal_collector_config DataLogicmonitorDeviceGroup#normal_collector_config}
  */
  readonly normalCollectorConfig?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig[] | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAY | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_n_s_p_schedule: cdktf.stringToTerraform(struct!.customNSPSchedule),
    dead_operation: cdktf.stringToTerraform(struct!.deadOperation),
    device_display_name_template: cdktf.stringToTerraform(struct!.deviceDisplayNameTemplate),
    disable_stop_terminate_host_monitor: cdktf.booleanToTerraform(struct!.disableStopTerminateHostMonitor),
    disable_terminated_host_alerting: cdktf.booleanToTerraform(struct!.disableTerminatedHostAlerting),
    monitoring_region_infos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegionInfos),
    monitoring_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegions),
    name_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameFilter),
    select_all: cdktf.booleanToTerraform(struct!.selectAll),
    tags: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsToTerraform, false)(struct!.tags),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    normal_collector_config: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigToTerraform, true)(struct!.normalCollectorConfig),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAY | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_n_s_p_schedule: {
      value: cdktf.stringToHclTerraform(struct!.customNSPSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_operation: {
      value: cdktf.stringToHclTerraform(struct!.deadOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_display_name_template: {
      value: cdktf.stringToHclTerraform(struct!.deviceDisplayNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_stop_terminate_host_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.disableStopTerminateHostMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_terminated_host_alerting: {
      value: cdktf.booleanToHclTerraform(struct!.disableTerminatedHostAlerting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_region_infos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegionInfos),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    monitoring_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    select_all: {
      value: cdktf.booleanToHclTerraform(struct!.selectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsList",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    normal_collector_config: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigToHclTerraform, true)(struct!.normalCollectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAY | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customNSPSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNSPSchedule = this._customNSPSchedule;
    }
    if (this._deadOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadOperation = this._deadOperation;
    }
    if (this._deviceDisplayNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDisplayNameTemplate = this._deviceDisplayNameTemplate;
    }
    if (this._disableStopTerminateHostMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStopTerminateHostMonitor = this._disableStopTerminateHostMonitor;
    }
    if (this._disableTerminatedHostAlerting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTerminatedHostAlerting = this._disableTerminatedHostAlerting;
    }
    if (this._monitoringRegionInfos !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegionInfos = this._monitoringRegionInfos;
    }
    if (this._monitoringRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegions = this._monitoringRegions;
    }
    if (this._nameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameFilter = this._nameFilter;
    }
    if (this._selectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAll = this._selectAll;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._normalCollectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalCollectorConfig = this._normalCollectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAY | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customNSPSchedule = undefined;
      this._deadOperation = undefined;
      this._deviceDisplayNameTemplate = undefined;
      this._disableStopTerminateHostMonitor = undefined;
      this._disableTerminatedHostAlerting = undefined;
      this._monitoringRegionInfos = undefined;
      this._monitoringRegions = undefined;
      this._nameFilter = undefined;
      this._selectAll = undefined;
      this._tags.internalValue = undefined;
      this._useDefault = undefined;
      this._normalCollectorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customNSPSchedule = value.customNSPSchedule;
      this._deadOperation = value.deadOperation;
      this._deviceDisplayNameTemplate = value.deviceDisplayNameTemplate;
      this._disableStopTerminateHostMonitor = value.disableStopTerminateHostMonitor;
      this._disableTerminatedHostAlerting = value.disableTerminatedHostAlerting;
      this._monitoringRegionInfos = value.monitoringRegionInfos;
      this._monitoringRegions = value.monitoringRegions;
      this._nameFilter = value.nameFilter;
      this._selectAll = value.selectAll;
      this._tags.internalValue = value.tags;
      this._useDefault = value.useDefault;
      this._normalCollectorConfig.internalValue = value.normalCollectorConfig;
    }
  }

  // custom_n_s_p_schedule - computed: false, optional: true, required: false
  private _customNSPSchedule?: string; 
  public get customNSPSchedule() {
    return this.getStringAttribute('custom_n_s_p_schedule');
  }
  public set customNSPSchedule(value: string) {
    this._customNSPSchedule = value;
  }
  public resetCustomNSPSchedule() {
    this._customNSPSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNSPScheduleInput() {
    return this._customNSPSchedule;
  }

  // dead_operation - computed: false, optional: true, required: false
  private _deadOperation?: string; 
  public get deadOperation() {
    return this.getStringAttribute('dead_operation');
  }
  public set deadOperation(value: string) {
    this._deadOperation = value;
  }
  public resetDeadOperation() {
    this._deadOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadOperationInput() {
    return this._deadOperation;
  }

  // device_display_name_template - computed: false, optional: true, required: false
  private _deviceDisplayNameTemplate?: string; 
  public get deviceDisplayNameTemplate() {
    return this.getStringAttribute('device_display_name_template');
  }
  public set deviceDisplayNameTemplate(value: string) {
    this._deviceDisplayNameTemplate = value;
  }
  public resetDeviceDisplayNameTemplate() {
    this._deviceDisplayNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDisplayNameTemplateInput() {
    return this._deviceDisplayNameTemplate;
  }

  // disable_stop_terminate_host_monitor - computed: false, optional: true, required: false
  private _disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable; 
  public get disableStopTerminateHostMonitor() {
    return this.getBooleanAttribute('disable_stop_terminate_host_monitor');
  }
  public set disableStopTerminateHostMonitor(value: boolean | cdktf.IResolvable) {
    this._disableStopTerminateHostMonitor = value;
  }
  public resetDisableStopTerminateHostMonitor() {
    this._disableStopTerminateHostMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStopTerminateHostMonitorInput() {
    return this._disableStopTerminateHostMonitor;
  }

  // disable_terminated_host_alerting - computed: false, optional: true, required: false
  private _disableTerminatedHostAlerting?: boolean | cdktf.IResolvable; 
  public get disableTerminatedHostAlerting() {
    return this.getBooleanAttribute('disable_terminated_host_alerting');
  }
  public set disableTerminatedHostAlerting(value: boolean | cdktf.IResolvable) {
    this._disableTerminatedHostAlerting = value;
  }
  public resetDisableTerminatedHostAlerting() {
    this._disableTerminatedHostAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerminatedHostAlertingInput() {
    return this._disableTerminatedHostAlerting;
  }

  // monitoring_region_infos - computed: false, optional: true, required: false
  private _monitoringRegionInfos?: string[]; 
  public get monitoringRegionInfos() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_region_infos'));
  }
  public set monitoringRegionInfos(value: string[]) {
    this._monitoringRegionInfos = value;
  }
  public resetMonitoringRegionInfos() {
    this._monitoringRegionInfos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionInfosInput() {
    return this._monitoringRegionInfos;
  }

  // monitoring_regions - computed: false, optional: true, required: false
  private _monitoringRegions?: string[]; 
  public get monitoringRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_regions'));
  }
  public set monitoringRegions(value: string[]) {
    this._monitoringRegions = value;
  }
  public resetMonitoringRegions() {
    this._monitoringRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionsInput() {
    return this._monitoringRegions;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string[]; 
  public get nameFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('name_filter'));
  }
  public set nameFilter(value: string[]) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // select_all - computed: false, optional: true, required: false
  private _selectAll?: boolean | cdktf.IResolvable; 
  public get selectAll() {
    return this.getBooleanAttribute('select_all');
  }
  public set selectAll(value: boolean | cdktf.IResolvable) {
    this._selectAll = value;
  }
  public resetSelectAll() {
    this._selectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllInput() {
    return this._selectAll;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // use_default - computed: false, optional: false, required: true
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // normal_collector_config - computed: false, optional: true, required: false
  private _normalCollectorConfig = new DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigList(this, "normal_collector_config", false);
  public get normalCollectorConfig() {
    return this._normalCollectorConfig;
  }
  public putNormalCollectorConfig(value: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig[] | cdktf.IResolvable) {
    this._normalCollectorConfig.internalValue = value;
  }
  public resetNormalCollectorConfig() {
    this._normalCollectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalCollectorConfigInput() {
    return this._normalCollectorConfig.internalValue;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAY[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesVPNTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#name DataLogicmonitorDeviceGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#operation DataLogicmonitorDeviceGroup#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#value DataLogicmonitorDeviceGroup#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDeviceGroupExtraServicesVPNTagsToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVPNTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesVPNTagsToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVPNTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesVPNTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesVPNTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesVPNTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesVPNTagsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesVPNTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesVPNTagsOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesVPNTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#applies_to DataLogicmonitorDeviceGroup#applies_to}
  */
  readonly appliesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#auto_balanced_collector_group_id DataLogicmonitorDeviceGroup#auto_balanced_collector_group_id}
  */
  readonly autoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#collector_id DataLogicmonitorDeviceGroup#collector_id}
  */
  readonly collectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#priority DataLogicmonitorDeviceGroup#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#use_public_ip DataLogicmonitorDeviceGroup#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to: cdktf.stringToTerraform(struct!.appliesTo),
    auto_balanced_collector_group_id: cdktf.numberToTerraform(struct!.autoBalancedCollectorGroupId),
    collector_id: cdktf.numberToTerraform(struct!.collectorId),
    priority: cdktf.numberToTerraform(struct!.priority),
    use_public_ip: cdktf.booleanToTerraform(struct!.usePublicIp),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to: {
      value: cdktf.stringToHclTerraform(struct!.appliesTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_balanced_collector_group_id: {
      value: cdktf.numberToHclTerraform(struct!.autoBalancedCollectorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_id: {
      value: cdktf.numberToHclTerraform(struct!.collectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo;
    }
    if (this._autoBalancedCollectorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBalancedCollectorGroupId = this._autoBalancedCollectorGroupId;
    }
    if (this._collectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorId = this._collectorId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._usePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIp = this._usePublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliesTo = undefined;
      this._autoBalancedCollectorGroupId = undefined;
      this._collectorId = undefined;
      this._priority = undefined;
      this._usePublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliesTo = value.appliesTo;
      this._autoBalancedCollectorGroupId = value.autoBalancedCollectorGroupId;
      this._collectorId = value.collectorId;
      this._priority = value.priority;
      this._usePublicIp = value.usePublicIp;
    }
  }

  // applies_to - computed: false, optional: true, required: false
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  public resetAppliesTo() {
    this._appliesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // auto_balanced_collector_group_id - computed: false, optional: true, required: false
  private _autoBalancedCollectorGroupId?: number; 
  public get autoBalancedCollectorGroupId() {
    return this.getNumberAttribute('auto_balanced_collector_group_id');
  }
  public set autoBalancedCollectorGroupId(value: number) {
    this._autoBalancedCollectorGroupId = value;
  }
  public resetAutoBalancedCollectorGroupId() {
    this._autoBalancedCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalancedCollectorGroupIdInput() {
    return this._autoBalancedCollectorGroupId;
  }

  // collector_id - computed: false, optional: true, required: false
  private _collectorId?: number; 
  public get collectorId() {
    return this.getNumberAttribute('collector_id');
  }
  public set collectorId(value: number) {
    this._collectorId = value;
  }
  public resetCollectorId() {
    this._collectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // use_public_ip - computed: false, optional: true, required: false
  private _usePublicIp?: boolean | cdktf.IResolvable; 
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }
  public set usePublicIp(value: boolean | cdktf.IResolvable) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#collectors DataLogicmonitorDeviceGroup#collectors}
  */
  readonly collectors?: DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#enabled DataLogicmonitorDeviceGroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collectors: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsToTerraform, false)(struct!.collectors),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collectors: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsToHclTerraform, false)(struct!.collectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectors = this._collectors?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectors.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectors.internalValue = value.collectors;
      this._enabled = value.enabled;
    }
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesVPN {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#custom_n_s_p_schedule DataLogicmonitorDeviceGroup#custom_n_s_p_schedule}
  */
  readonly customNSPSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#dead_operation DataLogicmonitorDeviceGroup#dead_operation}
  */
  readonly deadOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#device_display_name_template DataLogicmonitorDeviceGroup#device_display_name_template}
  */
  readonly deviceDisplayNameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#disable_stop_terminate_host_monitor DataLogicmonitorDeviceGroup#disable_stop_terminate_host_monitor}
  */
  readonly disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#disable_terminated_host_alerting DataLogicmonitorDeviceGroup#disable_terminated_host_alerting}
  */
  readonly disableTerminatedHostAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#monitoring_region_infos DataLogicmonitorDeviceGroup#monitoring_region_infos}
  */
  readonly monitoringRegionInfos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#monitoring_regions DataLogicmonitorDeviceGroup#monitoring_regions}
  */
  readonly monitoringRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#name_filter DataLogicmonitorDeviceGroup#name_filter}
  */
  readonly nameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#select_all DataLogicmonitorDeviceGroup#select_all}
  */
  readonly selectAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#tags DataLogicmonitorDeviceGroup#tags}
  */
  readonly tags?: DataLogicmonitorDeviceGroupExtraServicesVPNTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#use_default DataLogicmonitorDeviceGroup#use_default}
  */
  readonly useDefault: boolean | cdktf.IResolvable;
  /**
  * normal_collector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#normal_collector_config DataLogicmonitorDeviceGroup#normal_collector_config}
  */
  readonly normalCollectorConfig?: DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfig[] | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesVPNToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVPN | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_n_s_p_schedule: cdktf.stringToTerraform(struct!.customNSPSchedule),
    dead_operation: cdktf.stringToTerraform(struct!.deadOperation),
    device_display_name_template: cdktf.stringToTerraform(struct!.deviceDisplayNameTemplate),
    disable_stop_terminate_host_monitor: cdktf.booleanToTerraform(struct!.disableStopTerminateHostMonitor),
    disable_terminated_host_alerting: cdktf.booleanToTerraform(struct!.disableTerminatedHostAlerting),
    monitoring_region_infos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegionInfos),
    monitoring_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegions),
    name_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameFilter),
    select_all: cdktf.booleanToTerraform(struct!.selectAll),
    tags: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVPNTagsToTerraform, false)(struct!.tags),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    normal_collector_config: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigToTerraform, true)(struct!.normalCollectorConfig),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesVPNToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesVPN | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_n_s_p_schedule: {
      value: cdktf.stringToHclTerraform(struct!.customNSPSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_operation: {
      value: cdktf.stringToHclTerraform(struct!.deadOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_display_name_template: {
      value: cdktf.stringToHclTerraform(struct!.deviceDisplayNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_stop_terminate_host_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.disableStopTerminateHostMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_terminated_host_alerting: {
      value: cdktf.booleanToHclTerraform(struct!.disableTerminatedHostAlerting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_region_infos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegionInfos),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    monitoring_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    select_all: {
      value: cdktf.booleanToHclTerraform(struct!.selectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVPNTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVPNTagsList",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    normal_collector_config: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigToHclTerraform, true)(struct!.normalCollectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesVPNOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesVPN | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customNSPSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNSPSchedule = this._customNSPSchedule;
    }
    if (this._deadOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadOperation = this._deadOperation;
    }
    if (this._deviceDisplayNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDisplayNameTemplate = this._deviceDisplayNameTemplate;
    }
    if (this._disableStopTerminateHostMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStopTerminateHostMonitor = this._disableStopTerminateHostMonitor;
    }
    if (this._disableTerminatedHostAlerting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTerminatedHostAlerting = this._disableTerminatedHostAlerting;
    }
    if (this._monitoringRegionInfos !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegionInfos = this._monitoringRegionInfos;
    }
    if (this._monitoringRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegions = this._monitoringRegions;
    }
    if (this._nameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameFilter = this._nameFilter;
    }
    if (this._selectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAll = this._selectAll;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._normalCollectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalCollectorConfig = this._normalCollectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesVPN | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customNSPSchedule = undefined;
      this._deadOperation = undefined;
      this._deviceDisplayNameTemplate = undefined;
      this._disableStopTerminateHostMonitor = undefined;
      this._disableTerminatedHostAlerting = undefined;
      this._monitoringRegionInfos = undefined;
      this._monitoringRegions = undefined;
      this._nameFilter = undefined;
      this._selectAll = undefined;
      this._tags.internalValue = undefined;
      this._useDefault = undefined;
      this._normalCollectorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customNSPSchedule = value.customNSPSchedule;
      this._deadOperation = value.deadOperation;
      this._deviceDisplayNameTemplate = value.deviceDisplayNameTemplate;
      this._disableStopTerminateHostMonitor = value.disableStopTerminateHostMonitor;
      this._disableTerminatedHostAlerting = value.disableTerminatedHostAlerting;
      this._monitoringRegionInfos = value.monitoringRegionInfos;
      this._monitoringRegions = value.monitoringRegions;
      this._nameFilter = value.nameFilter;
      this._selectAll = value.selectAll;
      this._tags.internalValue = value.tags;
      this._useDefault = value.useDefault;
      this._normalCollectorConfig.internalValue = value.normalCollectorConfig;
    }
  }

  // custom_n_s_p_schedule - computed: false, optional: true, required: false
  private _customNSPSchedule?: string; 
  public get customNSPSchedule() {
    return this.getStringAttribute('custom_n_s_p_schedule');
  }
  public set customNSPSchedule(value: string) {
    this._customNSPSchedule = value;
  }
  public resetCustomNSPSchedule() {
    this._customNSPSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNSPScheduleInput() {
    return this._customNSPSchedule;
  }

  // dead_operation - computed: false, optional: true, required: false
  private _deadOperation?: string; 
  public get deadOperation() {
    return this.getStringAttribute('dead_operation');
  }
  public set deadOperation(value: string) {
    this._deadOperation = value;
  }
  public resetDeadOperation() {
    this._deadOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadOperationInput() {
    return this._deadOperation;
  }

  // device_display_name_template - computed: false, optional: true, required: false
  private _deviceDisplayNameTemplate?: string; 
  public get deviceDisplayNameTemplate() {
    return this.getStringAttribute('device_display_name_template');
  }
  public set deviceDisplayNameTemplate(value: string) {
    this._deviceDisplayNameTemplate = value;
  }
  public resetDeviceDisplayNameTemplate() {
    this._deviceDisplayNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDisplayNameTemplateInput() {
    return this._deviceDisplayNameTemplate;
  }

  // disable_stop_terminate_host_monitor - computed: false, optional: true, required: false
  private _disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable; 
  public get disableStopTerminateHostMonitor() {
    return this.getBooleanAttribute('disable_stop_terminate_host_monitor');
  }
  public set disableStopTerminateHostMonitor(value: boolean | cdktf.IResolvable) {
    this._disableStopTerminateHostMonitor = value;
  }
  public resetDisableStopTerminateHostMonitor() {
    this._disableStopTerminateHostMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStopTerminateHostMonitorInput() {
    return this._disableStopTerminateHostMonitor;
  }

  // disable_terminated_host_alerting - computed: false, optional: true, required: false
  private _disableTerminatedHostAlerting?: boolean | cdktf.IResolvable; 
  public get disableTerminatedHostAlerting() {
    return this.getBooleanAttribute('disable_terminated_host_alerting');
  }
  public set disableTerminatedHostAlerting(value: boolean | cdktf.IResolvable) {
    this._disableTerminatedHostAlerting = value;
  }
  public resetDisableTerminatedHostAlerting() {
    this._disableTerminatedHostAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerminatedHostAlertingInput() {
    return this._disableTerminatedHostAlerting;
  }

  // monitoring_region_infos - computed: false, optional: true, required: false
  private _monitoringRegionInfos?: string[]; 
  public get monitoringRegionInfos() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_region_infos'));
  }
  public set monitoringRegionInfos(value: string[]) {
    this._monitoringRegionInfos = value;
  }
  public resetMonitoringRegionInfos() {
    this._monitoringRegionInfos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionInfosInput() {
    return this._monitoringRegionInfos;
  }

  // monitoring_regions - computed: false, optional: true, required: false
  private _monitoringRegions?: string[]; 
  public get monitoringRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_regions'));
  }
  public set monitoringRegions(value: string[]) {
    this._monitoringRegions = value;
  }
  public resetMonitoringRegions() {
    this._monitoringRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionsInput() {
    return this._monitoringRegions;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string[]; 
  public get nameFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('name_filter'));
  }
  public set nameFilter(value: string[]) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // select_all - computed: false, optional: true, required: false
  private _selectAll?: boolean | cdktf.IResolvable; 
  public get selectAll() {
    return this.getBooleanAttribute('select_all');
  }
  public set selectAll(value: boolean | cdktf.IResolvable) {
    this._selectAll = value;
  }
  public resetSelectAll() {
    this._selectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllInput() {
    return this._selectAll;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataLogicmonitorDeviceGroupExtraServicesVPNTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataLogicmonitorDeviceGroupExtraServicesVPNTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // use_default - computed: false, optional: false, required: true
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // normal_collector_config - computed: false, optional: true, required: false
  private _normalCollectorConfig = new DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfigList(this, "normal_collector_config", false);
  public get normalCollectorConfig() {
    return this._normalCollectorConfig;
  }
  public putNormalCollectorConfig(value: DataLogicmonitorDeviceGroupExtraServicesVPNNormalCollectorConfig[] | cdktf.IResolvable) {
    this._normalCollectorConfig.internalValue = value;
  }
  public resetNormalCollectorConfig() {
    this._normalCollectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalCollectorConfigInput() {
    return this._normalCollectorConfig.internalValue;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesVPNList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesVPN[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesVPNOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesVPNOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesWORKSPACETags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#name DataLogicmonitorDeviceGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#operation DataLogicmonitorDeviceGroup#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#value DataLogicmonitorDeviceGroup#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACETagsToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACETags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACETagsToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACETags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACETagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesWORKSPACETags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACETags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACETagsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesWORKSPACETags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesWORKSPACETagsOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesWORKSPACETagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#applies_to DataLogicmonitorDeviceGroup#applies_to}
  */
  readonly appliesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#auto_balanced_collector_group_id DataLogicmonitorDeviceGroup#auto_balanced_collector_group_id}
  */
  readonly autoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#collector_id DataLogicmonitorDeviceGroup#collector_id}
  */
  readonly collectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#priority DataLogicmonitorDeviceGroup#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#use_public_ip DataLogicmonitorDeviceGroup#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to: cdktf.stringToTerraform(struct!.appliesTo),
    auto_balanced_collector_group_id: cdktf.numberToTerraform(struct!.autoBalancedCollectorGroupId),
    collector_id: cdktf.numberToTerraform(struct!.collectorId),
    priority: cdktf.numberToTerraform(struct!.priority),
    use_public_ip: cdktf.booleanToTerraform(struct!.usePublicIp),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to: {
      value: cdktf.stringToHclTerraform(struct!.appliesTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_balanced_collector_group_id: {
      value: cdktf.numberToHclTerraform(struct!.autoBalancedCollectorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_id: {
      value: cdktf.numberToHclTerraform(struct!.collectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo;
    }
    if (this._autoBalancedCollectorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBalancedCollectorGroupId = this._autoBalancedCollectorGroupId;
    }
    if (this._collectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorId = this._collectorId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._usePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIp = this._usePublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliesTo = undefined;
      this._autoBalancedCollectorGroupId = undefined;
      this._collectorId = undefined;
      this._priority = undefined;
      this._usePublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliesTo = value.appliesTo;
      this._autoBalancedCollectorGroupId = value.autoBalancedCollectorGroupId;
      this._collectorId = value.collectorId;
      this._priority = value.priority;
      this._usePublicIp = value.usePublicIp;
    }
  }

  // applies_to - computed: false, optional: true, required: false
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  public resetAppliesTo() {
    this._appliesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // auto_balanced_collector_group_id - computed: false, optional: true, required: false
  private _autoBalancedCollectorGroupId?: number; 
  public get autoBalancedCollectorGroupId() {
    return this.getNumberAttribute('auto_balanced_collector_group_id');
  }
  public set autoBalancedCollectorGroupId(value: number) {
    this._autoBalancedCollectorGroupId = value;
  }
  public resetAutoBalancedCollectorGroupId() {
    this._autoBalancedCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalancedCollectorGroupIdInput() {
    return this._autoBalancedCollectorGroupId;
  }

  // collector_id - computed: false, optional: true, required: false
  private _collectorId?: number; 
  public get collectorId() {
    return this.getNumberAttribute('collector_id');
  }
  public set collectorId(value: number) {
    this._collectorId = value;
  }
  public resetCollectorId() {
    this._collectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // use_public_ip - computed: false, optional: true, required: false
  private _usePublicIp?: boolean | cdktf.IResolvable; 
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }
  public set usePublicIp(value: boolean | cdktf.IResolvable) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#collectors DataLogicmonitorDeviceGroup#collectors}
  */
  readonly collectors?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#enabled DataLogicmonitorDeviceGroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collectors: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsToTerraform, false)(struct!.collectors),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collectors: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsToHclTerraform, false)(struct!.collectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectors = this._collectors?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectors.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectors.internalValue = value.collectors;
      this._enabled = value.enabled;
    }
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesWORKSPACE {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#custom_n_s_p_schedule DataLogicmonitorDeviceGroup#custom_n_s_p_schedule}
  */
  readonly customNSPSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#dead_operation DataLogicmonitorDeviceGroup#dead_operation}
  */
  readonly deadOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#device_display_name_template DataLogicmonitorDeviceGroup#device_display_name_template}
  */
  readonly deviceDisplayNameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#disable_stop_terminate_host_monitor DataLogicmonitorDeviceGroup#disable_stop_terminate_host_monitor}
  */
  readonly disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#disable_terminated_host_alerting DataLogicmonitorDeviceGroup#disable_terminated_host_alerting}
  */
  readonly disableTerminatedHostAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#monitoring_region_infos DataLogicmonitorDeviceGroup#monitoring_region_infos}
  */
  readonly monitoringRegionInfos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#monitoring_regions DataLogicmonitorDeviceGroup#monitoring_regions}
  */
  readonly monitoringRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#name_filter DataLogicmonitorDeviceGroup#name_filter}
  */
  readonly nameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#select_all DataLogicmonitorDeviceGroup#select_all}
  */
  readonly selectAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#tags DataLogicmonitorDeviceGroup#tags}
  */
  readonly tags?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACETags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#use_default DataLogicmonitorDeviceGroup#use_default}
  */
  readonly useDefault: boolean | cdktf.IResolvable;
  /**
  * normal_collector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#normal_collector_config DataLogicmonitorDeviceGroup#normal_collector_config}
  */
  readonly normalCollectorConfig?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfig[] | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACEToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACE | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_n_s_p_schedule: cdktf.stringToTerraform(struct!.customNSPSchedule),
    dead_operation: cdktf.stringToTerraform(struct!.deadOperation),
    device_display_name_template: cdktf.stringToTerraform(struct!.deviceDisplayNameTemplate),
    disable_stop_terminate_host_monitor: cdktf.booleanToTerraform(struct!.disableStopTerminateHostMonitor),
    disable_terminated_host_alerting: cdktf.booleanToTerraform(struct!.disableTerminatedHostAlerting),
    monitoring_region_infos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegionInfos),
    monitoring_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegions),
    name_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameFilter),
    select_all: cdktf.booleanToTerraform(struct!.selectAll),
    tags: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesWORKSPACETagsToTerraform, false)(struct!.tags),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    normal_collector_config: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigToTerraform, true)(struct!.normalCollectorConfig),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACEToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACE | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_n_s_p_schedule: {
      value: cdktf.stringToHclTerraform(struct!.customNSPSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_operation: {
      value: cdktf.stringToHclTerraform(struct!.deadOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_display_name_template: {
      value: cdktf.stringToHclTerraform(struct!.deviceDisplayNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_stop_terminate_host_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.disableStopTerminateHostMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_terminated_host_alerting: {
      value: cdktf.booleanToHclTerraform(struct!.disableTerminatedHostAlerting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_region_infos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegionInfos),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    monitoring_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    select_all: {
      value: cdktf.booleanToHclTerraform(struct!.selectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesWORKSPACETagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesWORKSPACETagsList",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    normal_collector_config: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigToHclTerraform, true)(struct!.normalCollectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACEOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesWORKSPACE | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customNSPSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNSPSchedule = this._customNSPSchedule;
    }
    if (this._deadOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadOperation = this._deadOperation;
    }
    if (this._deviceDisplayNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDisplayNameTemplate = this._deviceDisplayNameTemplate;
    }
    if (this._disableStopTerminateHostMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStopTerminateHostMonitor = this._disableStopTerminateHostMonitor;
    }
    if (this._disableTerminatedHostAlerting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTerminatedHostAlerting = this._disableTerminatedHostAlerting;
    }
    if (this._monitoringRegionInfos !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegionInfos = this._monitoringRegionInfos;
    }
    if (this._monitoringRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegions = this._monitoringRegions;
    }
    if (this._nameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameFilter = this._nameFilter;
    }
    if (this._selectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAll = this._selectAll;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._normalCollectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalCollectorConfig = this._normalCollectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACE | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customNSPSchedule = undefined;
      this._deadOperation = undefined;
      this._deviceDisplayNameTemplate = undefined;
      this._disableStopTerminateHostMonitor = undefined;
      this._disableTerminatedHostAlerting = undefined;
      this._monitoringRegionInfos = undefined;
      this._monitoringRegions = undefined;
      this._nameFilter = undefined;
      this._selectAll = undefined;
      this._tags.internalValue = undefined;
      this._useDefault = undefined;
      this._normalCollectorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customNSPSchedule = value.customNSPSchedule;
      this._deadOperation = value.deadOperation;
      this._deviceDisplayNameTemplate = value.deviceDisplayNameTemplate;
      this._disableStopTerminateHostMonitor = value.disableStopTerminateHostMonitor;
      this._disableTerminatedHostAlerting = value.disableTerminatedHostAlerting;
      this._monitoringRegionInfos = value.monitoringRegionInfos;
      this._monitoringRegions = value.monitoringRegions;
      this._nameFilter = value.nameFilter;
      this._selectAll = value.selectAll;
      this._tags.internalValue = value.tags;
      this._useDefault = value.useDefault;
      this._normalCollectorConfig.internalValue = value.normalCollectorConfig;
    }
  }

  // custom_n_s_p_schedule - computed: false, optional: true, required: false
  private _customNSPSchedule?: string; 
  public get customNSPSchedule() {
    return this.getStringAttribute('custom_n_s_p_schedule');
  }
  public set customNSPSchedule(value: string) {
    this._customNSPSchedule = value;
  }
  public resetCustomNSPSchedule() {
    this._customNSPSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNSPScheduleInput() {
    return this._customNSPSchedule;
  }

  // dead_operation - computed: false, optional: true, required: false
  private _deadOperation?: string; 
  public get deadOperation() {
    return this.getStringAttribute('dead_operation');
  }
  public set deadOperation(value: string) {
    this._deadOperation = value;
  }
  public resetDeadOperation() {
    this._deadOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadOperationInput() {
    return this._deadOperation;
  }

  // device_display_name_template - computed: false, optional: true, required: false
  private _deviceDisplayNameTemplate?: string; 
  public get deviceDisplayNameTemplate() {
    return this.getStringAttribute('device_display_name_template');
  }
  public set deviceDisplayNameTemplate(value: string) {
    this._deviceDisplayNameTemplate = value;
  }
  public resetDeviceDisplayNameTemplate() {
    this._deviceDisplayNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDisplayNameTemplateInput() {
    return this._deviceDisplayNameTemplate;
  }

  // disable_stop_terminate_host_monitor - computed: false, optional: true, required: false
  private _disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable; 
  public get disableStopTerminateHostMonitor() {
    return this.getBooleanAttribute('disable_stop_terminate_host_monitor');
  }
  public set disableStopTerminateHostMonitor(value: boolean | cdktf.IResolvable) {
    this._disableStopTerminateHostMonitor = value;
  }
  public resetDisableStopTerminateHostMonitor() {
    this._disableStopTerminateHostMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStopTerminateHostMonitorInput() {
    return this._disableStopTerminateHostMonitor;
  }

  // disable_terminated_host_alerting - computed: false, optional: true, required: false
  private _disableTerminatedHostAlerting?: boolean | cdktf.IResolvable; 
  public get disableTerminatedHostAlerting() {
    return this.getBooleanAttribute('disable_terminated_host_alerting');
  }
  public set disableTerminatedHostAlerting(value: boolean | cdktf.IResolvable) {
    this._disableTerminatedHostAlerting = value;
  }
  public resetDisableTerminatedHostAlerting() {
    this._disableTerminatedHostAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerminatedHostAlertingInput() {
    return this._disableTerminatedHostAlerting;
  }

  // monitoring_region_infos - computed: false, optional: true, required: false
  private _monitoringRegionInfos?: string[]; 
  public get monitoringRegionInfos() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_region_infos'));
  }
  public set monitoringRegionInfos(value: string[]) {
    this._monitoringRegionInfos = value;
  }
  public resetMonitoringRegionInfos() {
    this._monitoringRegionInfos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionInfosInput() {
    return this._monitoringRegionInfos;
  }

  // monitoring_regions - computed: false, optional: true, required: false
  private _monitoringRegions?: string[]; 
  public get monitoringRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_regions'));
  }
  public set monitoringRegions(value: string[]) {
    this._monitoringRegions = value;
  }
  public resetMonitoringRegions() {
    this._monitoringRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionsInput() {
    return this._monitoringRegions;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string[]; 
  public get nameFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('name_filter'));
  }
  public set nameFilter(value: string[]) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // select_all - computed: false, optional: true, required: false
  private _selectAll?: boolean | cdktf.IResolvable; 
  public get selectAll() {
    return this.getBooleanAttribute('select_all');
  }
  public set selectAll(value: boolean | cdktf.IResolvable) {
    this._selectAll = value;
  }
  public resetSelectAll() {
    this._selectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllInput() {
    return this._selectAll;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataLogicmonitorDeviceGroupExtraServicesWORKSPACETagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACETags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // use_default - computed: false, optional: false, required: true
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // normal_collector_config - computed: false, optional: true, required: false
  private _normalCollectorConfig = new DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfigList(this, "normal_collector_config", false);
  public get normalCollectorConfig() {
    return this._normalCollectorConfig;
  }
  public putNormalCollectorConfig(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACENormalCollectorConfig[] | cdktf.IResolvable) {
    this._normalCollectorConfig.internalValue = value;
  }
  public resetNormalCollectorConfig() {
    this._normalCollectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalCollectorConfigInput() {
    return this._normalCollectorConfig.internalValue;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACEList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesWORKSPACE[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesWORKSPACEOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesWORKSPACEOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#name DataLogicmonitorDeviceGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#operation DataLogicmonitorDeviceGroup#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#value DataLogicmonitorDeviceGroup#value}
  */
  readonly value?: string;
}

export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTagsToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTagsToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTagsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTagsOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#applies_to DataLogicmonitorDeviceGroup#applies_to}
  */
  readonly appliesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#auto_balanced_collector_group_id DataLogicmonitorDeviceGroup#auto_balanced_collector_group_id}
  */
  readonly autoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#collector_id DataLogicmonitorDeviceGroup#collector_id}
  */
  readonly collectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#priority DataLogicmonitorDeviceGroup#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#use_public_ip DataLogicmonitorDeviceGroup#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to: cdktf.stringToTerraform(struct!.appliesTo),
    auto_balanced_collector_group_id: cdktf.numberToTerraform(struct!.autoBalancedCollectorGroupId),
    collector_id: cdktf.numberToTerraform(struct!.collectorId),
    priority: cdktf.numberToTerraform(struct!.priority),
    use_public_ip: cdktf.booleanToTerraform(struct!.usePublicIp),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to: {
      value: cdktf.stringToHclTerraform(struct!.appliesTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_balanced_collector_group_id: {
      value: cdktf.numberToHclTerraform(struct!.autoBalancedCollectorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_id: {
      value: cdktf.numberToHclTerraform(struct!.collectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo;
    }
    if (this._autoBalancedCollectorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBalancedCollectorGroupId = this._autoBalancedCollectorGroupId;
    }
    if (this._collectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorId = this._collectorId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._usePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIp = this._usePublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliesTo = undefined;
      this._autoBalancedCollectorGroupId = undefined;
      this._collectorId = undefined;
      this._priority = undefined;
      this._usePublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliesTo = value.appliesTo;
      this._autoBalancedCollectorGroupId = value.autoBalancedCollectorGroupId;
      this._collectorId = value.collectorId;
      this._priority = value.priority;
      this._usePublicIp = value.usePublicIp;
    }
  }

  // applies_to - computed: false, optional: true, required: false
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  public resetAppliesTo() {
    this._appliesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // auto_balanced_collector_group_id - computed: false, optional: true, required: false
  private _autoBalancedCollectorGroupId?: number; 
  public get autoBalancedCollectorGroupId() {
    return this.getNumberAttribute('auto_balanced_collector_group_id');
  }
  public set autoBalancedCollectorGroupId(value: number) {
    this._autoBalancedCollectorGroupId = value;
  }
  public resetAutoBalancedCollectorGroupId() {
    this._autoBalancedCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalancedCollectorGroupIdInput() {
    return this._autoBalancedCollectorGroupId;
  }

  // collector_id - computed: false, optional: true, required: false
  private _collectorId?: number; 
  public get collectorId() {
    return this.getNumberAttribute('collector_id');
  }
  public set collectorId(value: number) {
    this._collectorId = value;
  }
  public resetCollectorId() {
    this._collectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // use_public_ip - computed: false, optional: true, required: false
  private _usePublicIp?: boolean | cdktf.IResolvable; 
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }
  public set usePublicIp(value: boolean | cdktf.IResolvable) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#collectors DataLogicmonitorDeviceGroup#collectors}
  */
  readonly collectors?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#enabled DataLogicmonitorDeviceGroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collectors: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsToTerraform, false)(struct!.collectors),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collectors: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsToHclTerraform, false)(struct!.collectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectors = this._collectors?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectors.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectors.internalValue = value.collectors;
      this._enabled = value.enabled;
    }
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORY {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#custom_n_s_p_schedule DataLogicmonitorDeviceGroup#custom_n_s_p_schedule}
  */
  readonly customNSPSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#dead_operation DataLogicmonitorDeviceGroup#dead_operation}
  */
  readonly deadOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#device_display_name_template DataLogicmonitorDeviceGroup#device_display_name_template}
  */
  readonly deviceDisplayNameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#disable_stop_terminate_host_monitor DataLogicmonitorDeviceGroup#disable_stop_terminate_host_monitor}
  */
  readonly disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#disable_terminated_host_alerting DataLogicmonitorDeviceGroup#disable_terminated_host_alerting}
  */
  readonly disableTerminatedHostAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#monitoring_region_infos DataLogicmonitorDeviceGroup#monitoring_region_infos}
  */
  readonly monitoringRegionInfos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#monitoring_regions DataLogicmonitorDeviceGroup#monitoring_regions}
  */
  readonly monitoringRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#name_filter DataLogicmonitorDeviceGroup#name_filter}
  */
  readonly nameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#select_all DataLogicmonitorDeviceGroup#select_all}
  */
  readonly selectAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#tags DataLogicmonitorDeviceGroup#tags}
  */
  readonly tags?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#use_default DataLogicmonitorDeviceGroup#use_default}
  */
  readonly useDefault: boolean | cdktf.IResolvable;
  /**
  * normal_collector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#normal_collector_config DataLogicmonitorDeviceGroup#normal_collector_config}
  */
  readonly normalCollectorConfig?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig[] | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORY | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_n_s_p_schedule: cdktf.stringToTerraform(struct!.customNSPSchedule),
    dead_operation: cdktf.stringToTerraform(struct!.deadOperation),
    device_display_name_template: cdktf.stringToTerraform(struct!.deviceDisplayNameTemplate),
    disable_stop_terminate_host_monitor: cdktf.booleanToTerraform(struct!.disableStopTerminateHostMonitor),
    disable_terminated_host_alerting: cdktf.booleanToTerraform(struct!.disableTerminatedHostAlerting),
    monitoring_region_infos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegionInfos),
    monitoring_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegions),
    name_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameFilter),
    select_all: cdktf.booleanToTerraform(struct!.selectAll),
    tags: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTagsToTerraform, false)(struct!.tags),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    normal_collector_config: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigToTerraform, true)(struct!.normalCollectorConfig),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORY | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_n_s_p_schedule: {
      value: cdktf.stringToHclTerraform(struct!.customNSPSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_operation: {
      value: cdktf.stringToHclTerraform(struct!.deadOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_display_name_template: {
      value: cdktf.stringToHclTerraform(struct!.deviceDisplayNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_stop_terminate_host_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.disableStopTerminateHostMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_terminated_host_alerting: {
      value: cdktf.booleanToHclTerraform(struct!.disableTerminatedHostAlerting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_region_infos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegionInfos),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    monitoring_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    select_all: {
      value: cdktf.booleanToHclTerraform(struct!.selectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTagsList",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    normal_collector_config: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigToHclTerraform, true)(struct!.normalCollectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORY | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customNSPSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNSPSchedule = this._customNSPSchedule;
    }
    if (this._deadOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadOperation = this._deadOperation;
    }
    if (this._deviceDisplayNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDisplayNameTemplate = this._deviceDisplayNameTemplate;
    }
    if (this._disableStopTerminateHostMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStopTerminateHostMonitor = this._disableStopTerminateHostMonitor;
    }
    if (this._disableTerminatedHostAlerting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTerminatedHostAlerting = this._disableTerminatedHostAlerting;
    }
    if (this._monitoringRegionInfos !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegionInfos = this._monitoringRegionInfos;
    }
    if (this._monitoringRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegions = this._monitoringRegions;
    }
    if (this._nameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameFilter = this._nameFilter;
    }
    if (this._selectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAll = this._selectAll;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._normalCollectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalCollectorConfig = this._normalCollectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORY | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customNSPSchedule = undefined;
      this._deadOperation = undefined;
      this._deviceDisplayNameTemplate = undefined;
      this._disableStopTerminateHostMonitor = undefined;
      this._disableTerminatedHostAlerting = undefined;
      this._monitoringRegionInfos = undefined;
      this._monitoringRegions = undefined;
      this._nameFilter = undefined;
      this._selectAll = undefined;
      this._tags.internalValue = undefined;
      this._useDefault = undefined;
      this._normalCollectorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customNSPSchedule = value.customNSPSchedule;
      this._deadOperation = value.deadOperation;
      this._deviceDisplayNameTemplate = value.deviceDisplayNameTemplate;
      this._disableStopTerminateHostMonitor = value.disableStopTerminateHostMonitor;
      this._disableTerminatedHostAlerting = value.disableTerminatedHostAlerting;
      this._monitoringRegionInfos = value.monitoringRegionInfos;
      this._monitoringRegions = value.monitoringRegions;
      this._nameFilter = value.nameFilter;
      this._selectAll = value.selectAll;
      this._tags.internalValue = value.tags;
      this._useDefault = value.useDefault;
      this._normalCollectorConfig.internalValue = value.normalCollectorConfig;
    }
  }

  // custom_n_s_p_schedule - computed: false, optional: true, required: false
  private _customNSPSchedule?: string; 
  public get customNSPSchedule() {
    return this.getStringAttribute('custom_n_s_p_schedule');
  }
  public set customNSPSchedule(value: string) {
    this._customNSPSchedule = value;
  }
  public resetCustomNSPSchedule() {
    this._customNSPSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNSPScheduleInput() {
    return this._customNSPSchedule;
  }

  // dead_operation - computed: false, optional: true, required: false
  private _deadOperation?: string; 
  public get deadOperation() {
    return this.getStringAttribute('dead_operation');
  }
  public set deadOperation(value: string) {
    this._deadOperation = value;
  }
  public resetDeadOperation() {
    this._deadOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadOperationInput() {
    return this._deadOperation;
  }

  // device_display_name_template - computed: false, optional: true, required: false
  private _deviceDisplayNameTemplate?: string; 
  public get deviceDisplayNameTemplate() {
    return this.getStringAttribute('device_display_name_template');
  }
  public set deviceDisplayNameTemplate(value: string) {
    this._deviceDisplayNameTemplate = value;
  }
  public resetDeviceDisplayNameTemplate() {
    this._deviceDisplayNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDisplayNameTemplateInput() {
    return this._deviceDisplayNameTemplate;
  }

  // disable_stop_terminate_host_monitor - computed: false, optional: true, required: false
  private _disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable; 
  public get disableStopTerminateHostMonitor() {
    return this.getBooleanAttribute('disable_stop_terminate_host_monitor');
  }
  public set disableStopTerminateHostMonitor(value: boolean | cdktf.IResolvable) {
    this._disableStopTerminateHostMonitor = value;
  }
  public resetDisableStopTerminateHostMonitor() {
    this._disableStopTerminateHostMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStopTerminateHostMonitorInput() {
    return this._disableStopTerminateHostMonitor;
  }

  // disable_terminated_host_alerting - computed: false, optional: true, required: false
  private _disableTerminatedHostAlerting?: boolean | cdktf.IResolvable; 
  public get disableTerminatedHostAlerting() {
    return this.getBooleanAttribute('disable_terminated_host_alerting');
  }
  public set disableTerminatedHostAlerting(value: boolean | cdktf.IResolvable) {
    this._disableTerminatedHostAlerting = value;
  }
  public resetDisableTerminatedHostAlerting() {
    this._disableTerminatedHostAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerminatedHostAlertingInput() {
    return this._disableTerminatedHostAlerting;
  }

  // monitoring_region_infos - computed: false, optional: true, required: false
  private _monitoringRegionInfos?: string[]; 
  public get monitoringRegionInfos() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_region_infos'));
  }
  public set monitoringRegionInfos(value: string[]) {
    this._monitoringRegionInfos = value;
  }
  public resetMonitoringRegionInfos() {
    this._monitoringRegionInfos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionInfosInput() {
    return this._monitoringRegionInfos;
  }

  // monitoring_regions - computed: false, optional: true, required: false
  private _monitoringRegions?: string[]; 
  public get monitoringRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_regions'));
  }
  public set monitoringRegions(value: string[]) {
    this._monitoringRegions = value;
  }
  public resetMonitoringRegions() {
    this._monitoringRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionsInput() {
    return this._monitoringRegions;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string[]; 
  public get nameFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('name_filter'));
  }
  public set nameFilter(value: string[]) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // select_all - computed: false, optional: true, required: false
  private _selectAll?: boolean | cdktf.IResolvable; 
  public get selectAll() {
    return this.getBooleanAttribute('select_all');
  }
  public set selectAll(value: boolean | cdktf.IResolvable) {
    this._selectAll = value;
  }
  public resetSelectAll() {
    this._selectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllInput() {
    return this._selectAll;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // use_default - computed: false, optional: false, required: true
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // normal_collector_config - computed: false, optional: true, required: false
  private _normalCollectorConfig = new DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigList(this, "normal_collector_config", false);
  public get normalCollectorConfig() {
    return this._normalCollectorConfig;
  }
  public putNormalCollectorConfig(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig[] | cdktf.IResolvable) {
    this._normalCollectorConfig.internalValue = value;
  }
  public resetNormalCollectorConfig() {
    this._normalCollectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalCollectorConfigInput() {
    return this._normalCollectorConfig.internalValue;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORY[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtraServices {
  /**
  * a_p_p_l_i_c_a_t_i_o_n_e_l_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#a_p_p_l_i_c_a_t_i_o_n_e_l_b DataLogicmonitorDeviceGroup#a_p_p_l_i_c_a_t_i_o_n_e_l_b}
  */
  readonly aPPLICATIONELB?: DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONELB[] | cdktf.IResolvable;
  /**
  * a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y DataLogicmonitorDeviceGroup#a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y}
  */
  readonly aPPLICATIONGATEWAY?: DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONGATEWAY[] | cdktf.IResolvable;
  /**
  * a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s DataLogicmonitorDeviceGroup#a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s}
  */
  readonly aPPLICATIONINSIGHTS?: DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONINSIGHTS[] | cdktf.IResolvable;
  /**
  * a_p_p_s_e_r_v_i_c_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#a_p_p_s_e_r_v_i_c_e DataLogicmonitorDeviceGroup#a_p_p_s_e_r_v_i_c_e}
  */
  readonly aPPSERVICE?: DataLogicmonitorDeviceGroupExtraServicesAPPSERVICE[] | cdktf.IResolvable;
  /**
  * a_p_p_s_e_r_v_i_c_e_p_l_a_n block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#a_p_p_s_e_r_v_i_c_e_p_l_a_n DataLogicmonitorDeviceGroup#a_p_p_s_e_r_v_i_c_e_p_l_a_n}
  */
  readonly aPPSERVICEPLAN?: DataLogicmonitorDeviceGroupExtraServicesAPPSERVICEPLAN[] | cdktf.IResolvable;
  /**
  * a_p_p_s_t_r_e_a_m block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#a_p_p_s_t_r_e_a_m DataLogicmonitorDeviceGroup#a_p_p_s_t_r_e_a_m}
  */
  readonly aPPSTREAM?: DataLogicmonitorDeviceGroupExtraServicesAPPSTREAM[] | cdktf.IResolvable;
  /**
  * a_t_h_e_n_a block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#a_t_h_e_n_a DataLogicmonitorDeviceGroup#a_t_h_e_n_a}
  */
  readonly aTHENA?: DataLogicmonitorDeviceGroupExtraServicesATHENA[] | cdktf.IResolvable;
  /**
  * a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t DataLogicmonitorDeviceGroup#a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t}
  */
  readonly aUTOMATIONACCOUNT?: DataLogicmonitorDeviceGroupExtraServicesAUTOMATIONACCOUNT[] | cdktf.IResolvable;
  /**
  * a_u_t_o_s_c_a_l_i_n_g block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#a_u_t_o_s_c_a_l_i_n_g DataLogicmonitorDeviceGroup#a_u_t_o_s_c_a_l_i_n_g}
  */
  readonly aUTOSCALING?: DataLogicmonitorDeviceGroupExtraServicesAUTOSCALING[] | cdktf.IResolvable;
  /**
  * api_g_a_t_e_w_a_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#api_g_a_t_e_w_a_y DataLogicmonitorDeviceGroup#api_g_a_t_e_w_a_y}
  */
  readonly apiGATEWAY?: DataLogicmonitorDeviceGroupExtraServicesApiGATEWAY[] | cdktf.IResolvable;
  /**
  * api_m_a_n_a_g_e_m_e_n_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#api_m_a_n_a_g_e_m_e_n_t DataLogicmonitorDeviceGroup#api_m_a_n_a_g_e_m_e_n_t}
  */
  readonly apiMANAGEMENT?: DataLogicmonitorDeviceGroupExtraServicesApiMANAGEMENT[] | cdktf.IResolvable;
  /**
  * b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s DataLogicmonitorDeviceGroup#b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s}
  */
  readonly bACKUPPROTECTEDITEMS?: DataLogicmonitorDeviceGroupExtraServicesBACKUPPROTECTEDITEMS[] | cdktf.IResolvable;
  /**
  * b_l_o_b_s_t_o_r_a_g_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#b_l_o_b_s_t_o_r_a_g_e DataLogicmonitorDeviceGroup#b_l_o_b_s_t_o_r_a_g_e}
  */
  readonly bLOBSTORAGE?: DataLogicmonitorDeviceGroupExtraServicesBLOBSTORAGE[] | cdktf.IResolvable;
  /**
  * c_l_o_u_d_f_r_o_n_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#c_l_o_u_d_f_r_o_n_t DataLogicmonitorDeviceGroup#c_l_o_u_d_f_r_o_n_t}
  */
  readonly cLOUDFRONT?: DataLogicmonitorDeviceGroupExtraServicesCLOUDFRONT[] | cdktf.IResolvable;
  /**
  * c_l_o_u_d_s_e_a_r_c_h block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#c_l_o_u_d_s_e_a_r_c_h DataLogicmonitorDeviceGroup#c_l_o_u_d_s_e_a_r_c_h}
  */
  readonly cLOUDSEARCH?: DataLogicmonitorDeviceGroupExtraServicesCLOUDSEARCH[] | cdktf.IResolvable;
  /**
  * c_o_d_e_b_ui_l_d block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#c_o_d_e_b_ui_l_d DataLogicmonitorDeviceGroup#c_o_d_e_b_ui_l_d}
  */
  readonly cODEBUiLD?: DataLogicmonitorDeviceGroupExtraServicesCODEBUiLD[] | cdktf.IResolvable;
  /**
  * c_o_g_n_i_t_i_v_e_s_e_a_r_c_h block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#c_o_g_n_i_t_i_v_e_s_e_a_r_c_h DataLogicmonitorDeviceGroup#c_o_g_n_i_t_i_v_e_s_e_a_r_c_h}
  */
  readonly cOGNITIVESEARCH?: DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESEARCH[] | cdktf.IResolvable;
  /**
  * c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s DataLogicmonitorDeviceGroup#c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s}
  */
  readonly cOGNITIVESERVICES?: DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESERVICES[] | cdktf.IResolvable;
  /**
  * c_o_g_n_i_t_o block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#c_o_g_n_i_t_o DataLogicmonitorDeviceGroup#c_o_g_n_i_t_o}
  */
  readonly cOGNITO?: DataLogicmonitorDeviceGroupExtraServicesCOGNITO[] | cdktf.IResolvable;
  /**
  * c_o_s_m_o_s_d_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#c_o_s_m_o_s_d_b DataLogicmonitorDeviceGroup#c_o_s_m_o_s_d_b}
  */
  readonly cOSMOSDB?: DataLogicmonitorDeviceGroupExtraServicesCOSMOSDB[] | cdktf.IResolvable;
  /**
  * d_a_t_a_f_a_c_t_o_r_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#d_a_t_a_f_a_c_t_o_r_y DataLogicmonitorDeviceGroup#d_a_t_a_f_a_c_t_o_r_y}
  */
  readonly dATAFACTORY?: DataLogicmonitorDeviceGroupExtraServicesDATAFACTORY[] | cdktf.IResolvable;
  /**
  * d_i_r_e_c_t_c_o_n_n_e_c_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#d_i_r_e_c_t_c_o_n_n_e_c_t DataLogicmonitorDeviceGroup#d_i_r_e_c_t_c_o_n_n_e_c_t}
  */
  readonly dIRECTCONNECT?: DataLogicmonitorDeviceGroupExtraServicesDIRECTCONNECT[] | cdktf.IResolvable;
  /**
  * d_m_s_r_e_p_l_i_c_a_t_i_o_n block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#d_m_s_r_e_p_l_i_c_a_t_i_o_n DataLogicmonitorDeviceGroup#d_m_s_r_e_p_l_i_c_a_t_i_o_n}
  */
  readonly dMSREPLICATION?: DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATION[] | cdktf.IResolvable;
  /**
  * d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s DataLogicmonitorDeviceGroup#d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s}
  */
  readonly dMSREPLICATIONTASKS?: DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONTASKS[] | cdktf.IResolvable;
  /**
  * d_o_c_d_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#d_o_c_d_b DataLogicmonitorDeviceGroup#d_o_c_d_b}
  */
  readonly dOCDB?: DataLogicmonitorDeviceGroupExtraServicesDOCDB[] | cdktf.IResolvable;
  /**
  * d_y_n_a_m_o_d_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#d_y_n_a_m_o_d_b DataLogicmonitorDeviceGroup#d_y_n_a_m_o_d_b}
  */
  readonly dYNAMODB?: DataLogicmonitorDeviceGroupExtraServicesDYNAMODB[] | cdktf.IResolvable;
  /**
  * e_b_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_b_s DataLogicmonitorDeviceGroup#e_b_s}
  */
  readonly eBS?: DataLogicmonitorDeviceGroupExtraServicesEBS[] | cdktf.IResolvable;
  /**
  * e_c2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_c2 DataLogicmonitorDeviceGroup#e_c2}
  */
  readonly eC2?: DataLogicmonitorDeviceGroupExtraServicesEC2[] | cdktf.IResolvable;
  /**
  * e_c_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_c_s DataLogicmonitorDeviceGroup#e_c_s}
  */
  readonly eCS?: DataLogicmonitorDeviceGroupExtraServicesECS[] | cdktf.IResolvable;
  /**
  * e_f_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_f_s DataLogicmonitorDeviceGroup#e_f_s}
  */
  readonly eFS?: DataLogicmonitorDeviceGroupExtraServicesEFS[] | cdktf.IResolvable;
  /**
  * e_l_a_s_t_i_c_a_c_h_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_l_a_s_t_i_c_a_c_h_e DataLogicmonitorDeviceGroup#e_l_a_s_t_i_c_a_c_h_e}
  */
  readonly eLASTICACHE?: DataLogicmonitorDeviceGroupExtraServicesELASTICACHE[] | cdktf.IResolvable;
  /**
  * e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k DataLogicmonitorDeviceGroup#e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k}
  */
  readonly eLASTICBEANSTALK?: DataLogicmonitorDeviceGroupExtraServicesELASTICBEANSTALK[] | cdktf.IResolvable;
  /**
  * e_l_a_s_t_i_c_s_e_a_r_c_h block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_l_a_s_t_i_c_s_e_a_r_c_h DataLogicmonitorDeviceGroup#e_l_a_s_t_i_c_s_e_a_r_c_h}
  */
  readonly eLASTICSEARCH?: DataLogicmonitorDeviceGroupExtraServicesELASTICSEARCH[] | cdktf.IResolvable;
  /**
  * e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r DataLogicmonitorDeviceGroup#e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r}
  */
  readonly eLASTICTRANSCODER?: DataLogicmonitorDeviceGroupExtraServicesELASTICTRANSCODER[] | cdktf.IResolvable;
  /**
  * e_l_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_l_b DataLogicmonitorDeviceGroup#e_l_b}
  */
  readonly eLB?: DataLogicmonitorDeviceGroupExtraServicesELB[] | cdktf.IResolvable;
  /**
  * e_m_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_m_r DataLogicmonitorDeviceGroup#e_m_r}
  */
  readonly eMR?: DataLogicmonitorDeviceGroupExtraServicesEMR[] | cdktf.IResolvable;
  /**
  * e_v_e_n_t_b_r_id_g_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_v_e_n_t_b_r_id_g_e DataLogicmonitorDeviceGroup#e_v_e_n_t_b_r_id_g_e}
  */
  readonly eVENTBRIdGE?: DataLogicmonitorDeviceGroupExtraServicesEVENTBRIdGE[] | cdktf.IResolvable;
  /**
  * e_v_e_n_t_h_u_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_v_e_n_t_h_u_b DataLogicmonitorDeviceGroup#e_v_e_n_t_h_u_b}
  */
  readonly eVENTHUB?: DataLogicmonitorDeviceGroupExtraServicesEVENTHUB[] | cdktf.IResolvable;
  /**
  * e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t DataLogicmonitorDeviceGroup#e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t}
  */
  readonly eXPRESSROUTECIRCUiT?: DataLogicmonitorDeviceGroupExtraServicesEXPRESSROUTECIRCUiT[] | cdktf.IResolvable;
  /**
  * f_i_l_e_s_t_o_r_a_g_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#f_i_l_e_s_t_o_r_a_g_e DataLogicmonitorDeviceGroup#f_i_l_e_s_t_o_r_a_g_e}
  */
  readonly fILESTORAGE?: DataLogicmonitorDeviceGroupExtraServicesFILESTORAGE[] | cdktf.IResolvable;
  /**
  * f_i_r_e_h_o_s_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#f_i_r_e_h_o_s_e DataLogicmonitorDeviceGroup#f_i_r_e_h_o_s_e}
  */
  readonly fIREHOSE?: DataLogicmonitorDeviceGroupExtraServicesFIREHOSE[] | cdktf.IResolvable;
  /**
  * f_i_r_e_w_a_l_l block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#f_i_r_e_w_a_l_l DataLogicmonitorDeviceGroup#f_i_r_e_w_a_l_l}
  */
  readonly fIREWALL?: DataLogicmonitorDeviceGroupExtraServicesFIREWALL[] | cdktf.IResolvable;
  /**
  * f_r_o_n_t_d_o_o_r_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#f_r_o_n_t_d_o_o_r_s DataLogicmonitorDeviceGroup#f_r_o_n_t_d_o_o_r_s}
  */
  readonly fRONTDOORS?: DataLogicmonitorDeviceGroupExtraServicesFRONTDOORS[] | cdktf.IResolvable;
  /**
  * f_s_x block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#f_s_x DataLogicmonitorDeviceGroup#f_s_x}
  */
  readonly fSX?: DataLogicmonitorDeviceGroupExtraServicesFSX[] | cdktf.IResolvable;
  /**
  * g_l_u_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#g_l_u_e DataLogicmonitorDeviceGroup#g_l_u_e}
  */
  readonly gLUE?: DataLogicmonitorDeviceGroupExtraServicesGLUE[] | cdktf.IResolvable;
  /**
  * k_e_y_v_a_u_l_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#k_e_y_v_a_u_l_t DataLogicmonitorDeviceGroup#k_e_y_v_a_u_l_t}
  */
  readonly kEYVAULT?: DataLogicmonitorDeviceGroupExtraServicesKEYVAULT[] | cdktf.IResolvable;
  /**
  * k_i_n_e_s_i_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#k_i_n_e_s_i_s DataLogicmonitorDeviceGroup#k_i_n_e_s_i_s}
  */
  readonly kINESIS?: DataLogicmonitorDeviceGroupExtraServicesKINESIS[] | cdktf.IResolvable;
  /**
  * k_i_n_e_s_i_s_v_id_e_o block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#k_i_n_e_s_i_s_v_id_e_o DataLogicmonitorDeviceGroup#k_i_n_e_s_i_s_v_id_e_o}
  */
  readonly kINESISVIdEO?: DataLogicmonitorDeviceGroupExtraServicesKINESISVIdEO[] | cdktf.IResolvable;
  /**
  * l_a_m_b_d_a block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#l_a_m_b_d_a DataLogicmonitorDeviceGroup#l_a_m_b_d_a}
  */
  readonly lAMBDA?: DataLogicmonitorDeviceGroupExtraServicesLAMBDA[] | cdktf.IResolvable;
  /**
  * l_o_a_d_b_a_l_a_n_c_e_r_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#l_o_a_d_b_a_l_a_n_c_e_r_s DataLogicmonitorDeviceGroup#l_o_a_d_b_a_l_a_n_c_e_r_s}
  */
  readonly lOADBALANCERS?: DataLogicmonitorDeviceGroupExtraServicesLOADBALANCERS[] | cdktf.IResolvable;
  /**
  * l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s DataLogicmonitorDeviceGroup#l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s}
  */
  readonly lOGANALYTICSWORKSPACES?: DataLogicmonitorDeviceGroupExtraServicesLOGANALYTICSWORKSPACES[] | cdktf.IResolvable;
  /**
  * l_o_g_i_c_a_p_p_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#l_o_g_i_c_a_p_p_s DataLogicmonitorDeviceGroup#l_o_g_i_c_a_p_p_s}
  */
  readonly lOGICAPPS?: DataLogicmonitorDeviceGroupExtraServicesLOGICAPPS[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_c_o_n_n_e_c_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#m_e_d_i_a_c_o_n_n_e_c_t DataLogicmonitorDeviceGroup#m_e_d_i_a_c_o_n_n_e_c_t}
  */
  readonly mEDIACONNECT?: DataLogicmonitorDeviceGroupExtraServicesMEDIACONNECT[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_c_o_n_v_e_r_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#m_e_d_i_a_c_o_n_v_e_r_t DataLogicmonitorDeviceGroup#m_e_d_i_a_c_o_n_v_e_r_t}
  */
  readonly mEDIACONVERT?: DataLogicmonitorDeviceGroupExtraServicesMEDIACONVERT[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e DataLogicmonitorDeviceGroup#m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e}
  */
  readonly mEDIAPACKAGELIVE?: DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGELIVE[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_p_a_c_k_a_g_e_v_o_d block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#m_e_d_i_a_p_a_c_k_a_g_e_v_o_d DataLogicmonitorDeviceGroup#m_e_d_i_a_p_a_c_k_a_g_e_v_o_d}
  */
  readonly mEDIAPACKAGEVOD?: DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGEVOD[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_s_t_o_r_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#m_e_d_i_a_s_t_o_r_e DataLogicmonitorDeviceGroup#m_e_d_i_a_s_t_o_r_e}
  */
  readonly mEDIASTORE?: DataLogicmonitorDeviceGroupExtraServicesMEDIASTORE[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_t_a_i_l_o_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#m_e_d_i_a_t_a_i_l_o_r DataLogicmonitorDeviceGroup#m_e_d_i_a_t_a_i_l_o_r}
  */
  readonly mEDIATAILOR?: DataLogicmonitorDeviceGroupExtraServicesMEDIATAILOR[] | cdktf.IResolvable;
  /**
  * m_q block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#m_q DataLogicmonitorDeviceGroup#m_q}
  */
  readonly mQ?: DataLogicmonitorDeviceGroupExtraServicesMQ[] | cdktf.IResolvable;
  /**
  * m_s_k_b_r_o_k_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#m_s_k_b_r_o_k_e_r DataLogicmonitorDeviceGroup#m_s_k_b_r_o_k_e_r}
  */
  readonly mSKBROKER?: DataLogicmonitorDeviceGroupExtraServicesMSKBROKER[] | cdktf.IResolvable;
  /**
  * m_s_k_c_l_u_s_t_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#m_s_k_c_l_u_s_t_e_r DataLogicmonitorDeviceGroup#m_s_k_c_l_u_s_t_e_r}
  */
  readonly mSKCLUSTER?: DataLogicmonitorDeviceGroupExtraServicesMSKCLUSTER[] | cdktf.IResolvable;
  /**
  * m_y_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#m_y_sql DataLogicmonitorDeviceGroup#m_y_sql}
  */
  readonly mYSql?: DataLogicmonitorDeviceGroupExtraServicesMYSql[] | cdktf.IResolvable;
  /**
  * n_a_t_g_a_t_e_w_a_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#n_a_t_g_a_t_e_w_a_y DataLogicmonitorDeviceGroup#n_a_t_g_a_t_e_w_a_y}
  */
  readonly nATGATEWAY?: DataLogicmonitorDeviceGroupExtraServicesNATGATEWAY[] | cdktf.IResolvable;
  /**
  * n_e_t_w_o_r_k_e_l_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#n_e_t_w_o_r_k_e_l_b DataLogicmonitorDeviceGroup#n_e_t_w_o_r_k_e_l_b}
  */
  readonly nETWORKELB?: DataLogicmonitorDeviceGroupExtraServicesNETWORKELB[] | cdktf.IResolvable;
  /**
  * n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e DataLogicmonitorDeviceGroup#n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e}
  */
  readonly nETWORKINTERFACE?: DataLogicmonitorDeviceGroupExtraServicesNETWORKINTERFACE[] | cdktf.IResolvable;
  /**
  * o_p_s_w_o_r_k_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#o_p_s_w_o_r_k_s DataLogicmonitorDeviceGroup#o_p_s_w_o_r_k_s}
  */
  readonly oPSWORKS?: DataLogicmonitorDeviceGroupExtraServicesOPSWORKS[] | cdktf.IResolvable;
  /**
  * p_o_s_t_g_r_e_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#p_o_s_t_g_r_e_sql DataLogicmonitorDeviceGroup#p_o_s_t_g_r_e_sql}
  */
  readonly pOSTGRESql?: DataLogicmonitorDeviceGroupExtraServicesPOSTGRESql[] | cdktf.IResolvable;
  /**
  * p_u_b_l_i_c_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#p_u_b_l_i_c_ip DataLogicmonitorDeviceGroup#p_u_b_l_i_c_ip}
  */
  readonly pUBLICIp?: DataLogicmonitorDeviceGroupExtraServicesPUBLICIp[] | cdktf.IResolvable;
  /**
  * q_u_e_u_e_s_t_o_r_a_g_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#q_u_e_u_e_s_t_o_r_a_g_e DataLogicmonitorDeviceGroup#q_u_e_u_e_s_t_o_r_a_g_e}
  */
  readonly qUEUESTORAGE?: DataLogicmonitorDeviceGroupExtraServicesQUEUESTORAGE[] | cdktf.IResolvable;
  /**
  * r_d_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#r_d_s DataLogicmonitorDeviceGroup#r_d_s}
  */
  readonly rDS?: DataLogicmonitorDeviceGroupExtraServicesRDS[] | cdktf.IResolvable;
  /**
  * r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m DataLogicmonitorDeviceGroup#r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m}
  */
  readonly rECOVERYPROTECTEDITEM?: DataLogicmonitorDeviceGroupExtraServicesRECOVERYPROTECTEDITEM[] | cdktf.IResolvable;
  /**
  * r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s DataLogicmonitorDeviceGroup#r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s}
  */
  readonly rECOVERYSERVICES?: DataLogicmonitorDeviceGroupExtraServicesRECOVERYSERVICES[] | cdktf.IResolvable;
  /**
  * r_e_d_i_s_c_a_c_h_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#r_e_d_i_s_c_a_c_h_e DataLogicmonitorDeviceGroup#r_e_d_i_s_c_a_c_h_e}
  */
  readonly rEDISCACHE?: DataLogicmonitorDeviceGroupExtraServicesREDISCACHE[] | cdktf.IResolvable;
  /**
  * r_e_d_s_h_i_f_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#r_e_d_s_h_i_f_t DataLogicmonitorDeviceGroup#r_e_d_s_h_i_f_t}
  */
  readonly rEDSHIFT?: DataLogicmonitorDeviceGroupExtraServicesREDSHIFT[] | cdktf.IResolvable;
  /**
  * r_o_u_t_e53 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#r_o_u_t_e53 DataLogicmonitorDeviceGroup#r_o_u_t_e53}
  */
  readonly rOUTE53?: DataLogicmonitorDeviceGroupExtraServicesROUTE53[] | cdktf.IResolvable;
  /**
  * r_o_u_t_e53_r_e_s_o_l_v_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#r_o_u_t_e53_r_e_s_o_l_v_e_r DataLogicmonitorDeviceGroup#r_o_u_t_e53_r_e_s_o_l_v_e_r}
  */
  readonly rOUTE53RESOLVER?: DataLogicmonitorDeviceGroupExtraServicesROUTE53RESOLVER[] | cdktf.IResolvable;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s3 DataLogicmonitorDeviceGroup#s3}
  */
  readonly s3?: DataLogicmonitorDeviceGroupExtraServicesS3[] | cdktf.IResolvable;
  /**
  * s_a_g_e_m_a_k_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s_a_g_e_m_a_k_e_r DataLogicmonitorDeviceGroup#s_a_g_e_m_a_k_e_r}
  */
  readonly sAGEMAKER?: DataLogicmonitorDeviceGroupExtraServicesSAGEMAKER[] | cdktf.IResolvable;
  /**
  * s_e_r_v_i_c_e_b_u_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s_e_r_v_i_c_e_b_u_s DataLogicmonitorDeviceGroup#s_e_r_v_i_c_e_b_u_s}
  */
  readonly sERVICEBUS?: DataLogicmonitorDeviceGroupExtraServicesSERVICEBUS[] | cdktf.IResolvable;
  /**
  * s_e_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s_e_s DataLogicmonitorDeviceGroup#s_e_s}
  */
  readonly sES?: DataLogicmonitorDeviceGroupExtraServicesSES[] | cdktf.IResolvable;
  /**
  * s_n_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s_n_s DataLogicmonitorDeviceGroup#s_n_s}
  */
  readonly sNS?: DataLogicmonitorDeviceGroupExtraServicesSNS[] | cdktf.IResolvable;
  /**
  * s_q_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s_q_s DataLogicmonitorDeviceGroup#s_q_s}
  */
  readonly sQS?: DataLogicmonitorDeviceGroupExtraServicesSQS[] | cdktf.IResolvable;
  /**
  * s_t_e_p_f_u_n_c_t_i_o_n_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s_t_e_p_f_u_n_c_t_i_o_n_s DataLogicmonitorDeviceGroup#s_t_e_p_f_u_n_c_t_i_o_n_s}
  */
  readonly sTEPFUNCTIONS?: DataLogicmonitorDeviceGroupExtraServicesSTEPFUNCTIONS[] | cdktf.IResolvable;
  /**
  * s_t_o_r_a_g_e_a_c_c_o_u_n_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s_t_o_r_a_g_e_a_c_c_o_u_n_t DataLogicmonitorDeviceGroup#s_t_o_r_a_g_e_a_c_c_o_u_n_t}
  */
  readonly sTORAGEACCOUNT?: DataLogicmonitorDeviceGroupExtraServicesSTORAGEACCOUNT[] | cdktf.IResolvable;
  /**
  * s_w_f_a_c_t_i_v_i_t_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s_w_f_a_c_t_i_v_i_t_y DataLogicmonitorDeviceGroup#s_w_f_a_c_t_i_v_i_t_y}
  */
  readonly sWFACTIVITY?: DataLogicmonitorDeviceGroupExtraServicesSWFACTIVITY[] | cdktf.IResolvable;
  /**
  * s_w_f_w_o_r_k_f_l_o_w block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s_w_f_w_o_r_k_f_l_o_w DataLogicmonitorDeviceGroup#s_w_f_w_o_r_k_f_l_o_w}
  */
  readonly sWFWORKFLOW?: DataLogicmonitorDeviceGroupExtraServicesSWFWORKFLOW[] | cdktf.IResolvable;
  /**
  * s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s DataLogicmonitorDeviceGroup#s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s}
  */
  readonly sYNAPSEWORKSPACES?: DataLogicmonitorDeviceGroupExtraServicesSYNAPSEWORKSPACES[] | cdktf.IResolvable;
  /**
  * sql_d_a_t_a_b_a_s_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#sql_d_a_t_a_b_a_s_e DataLogicmonitorDeviceGroup#sql_d_a_t_a_b_a_s_e}
  */
  readonly sqlDATABASE?: DataLogicmonitorDeviceGroupExtraServicesSqlDATABASE[] | cdktf.IResolvable;
  /**
  * sql_e_l_a_s_t_i_c_p_o_o_l block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#sql_e_l_a_s_t_i_c_p_o_o_l DataLogicmonitorDeviceGroup#sql_e_l_a_s_t_i_c_p_o_o_l}
  */
  readonly sqlELASTICPOOL?: DataLogicmonitorDeviceGroupExtraServicesSqlELASTICPOOL[] | cdktf.IResolvable;
  /**
  * sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e DataLogicmonitorDeviceGroup#sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e}
  */
  readonly sqlMANAGEDINSTANCE?: DataLogicmonitorDeviceGroupExtraServicesSqlMANAGEDINSTANCE[] | cdktf.IResolvable;
  /**
  * t_a_b_l_e_s_t_o_r_a_g_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#t_a_b_l_e_s_t_o_r_a_g_e DataLogicmonitorDeviceGroup#t_a_b_l_e_s_t_o_r_a_g_e}
  */
  readonly tABLESTORAGE?: DataLogicmonitorDeviceGroupExtraServicesTABLESTORAGE[] | cdktf.IResolvable;
  /**
  * t_r_a_f_f_i_c_m_a_n_a_g_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#t_r_a_f_f_i_c_m_a_n_a_g_e_r DataLogicmonitorDeviceGroup#t_r_a_f_f_i_c_m_a_n_a_g_e_r}
  */
  readonly tRAFFICMANAGER?: DataLogicmonitorDeviceGroupExtraServicesTRAFFICMANAGER[] | cdktf.IResolvable;
  /**
  * t_r_a_n_s_i_t_g_a_t_e_w_a_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#t_r_a_n_s_i_t_g_a_t_e_w_a_y DataLogicmonitorDeviceGroup#t_r_a_n_s_i_t_g_a_t_e_w_a_y}
  */
  readonly tRANSITGATEWAY?: DataLogicmonitorDeviceGroupExtraServicesTRANSITGATEWAY[] | cdktf.IResolvable;
  /**
  * v_i_r_t_u_a_l_d_e_s_k_t_o_p block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#v_i_r_t_u_a_l_d_e_s_k_t_o_p DataLogicmonitorDeviceGroup#v_i_r_t_u_a_l_d_e_s_k_t_o_p}
  */
  readonly vIRTUALDESKTOP?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALDESKTOP[] | cdktf.IResolvable;
  /**
  * v_i_r_t_u_a_l_m_a_c_h_i_n_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#v_i_r_t_u_a_l_m_a_c_h_i_n_e DataLogicmonitorDeviceGroup#v_i_r_t_u_a_l_m_a_c_h_i_n_e}
  */
  readonly vIRTUALMACHINE?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINE[] | cdktf.IResolvable;
  /**
  * v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t DataLogicmonitorDeviceGroup#v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t}
  */
  readonly vIRTUALMACHINESCALESET?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESET[] | cdktf.IResolvable;
  /**
  * v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm DataLogicmonitorDeviceGroup#v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm}
  */
  readonly vIRTUALMACHINESCALESETVm?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETVm[] | cdktf.IResolvable;
  /**
  * v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y DataLogicmonitorDeviceGroup#v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y}
  */
  readonly vIRTUALNETWORKGATEWAY?: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAY[] | cdktf.IResolvable;
  /**
  * v_p_n block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#v_p_n DataLogicmonitorDeviceGroup#v_p_n}
  */
  readonly vPN?: DataLogicmonitorDeviceGroupExtraServicesVPN[] | cdktf.IResolvable;
  /**
  * w_o_r_k_s_p_a_c_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#w_o_r_k_s_p_a_c_e DataLogicmonitorDeviceGroup#w_o_r_k_s_p_a_c_e}
  */
  readonly wORKSPACE?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACE[] | cdktf.IResolvable;
  /**
  * w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y DataLogicmonitorDeviceGroup#w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y}
  */
  readonly wORKSPACEDIRECTORY?: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORY[] | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraServicesToTerraform(struct?: DataLogicmonitorDeviceGroupExtraServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a_p_p_l_i_c_a_t_i_o_n_e_l_b: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONELBToTerraform, true)(struct!.aPPLICATIONELB),
    a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONGATEWAYToTerraform, true)(struct!.aPPLICATIONGATEWAY),
    a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONINSIGHTSToTerraform, true)(struct!.aPPLICATIONINSIGHTS),
    a_p_p_s_e_r_v_i_c_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesAPPSERVICEToTerraform, true)(struct!.aPPSERVICE),
    a_p_p_s_e_r_v_i_c_e_p_l_a_n: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesAPPSERVICEPLANToTerraform, true)(struct!.aPPSERVICEPLAN),
    a_p_p_s_t_r_e_a_m: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesAPPSTREAMToTerraform, true)(struct!.aPPSTREAM),
    a_t_h_e_n_a: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesATHENAToTerraform, true)(struct!.aTHENA),
    a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesAUTOMATIONACCOUNTToTerraform, true)(struct!.aUTOMATIONACCOUNT),
    a_u_t_o_s_c_a_l_i_n_g: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesAUTOSCALINGToTerraform, true)(struct!.aUTOSCALING),
    api_g_a_t_e_w_a_y: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesApiGATEWAYToTerraform, true)(struct!.apiGATEWAY),
    api_m_a_n_a_g_e_m_e_n_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesApiMANAGEMENTToTerraform, true)(struct!.apiMANAGEMENT),
    b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesBACKUPPROTECTEDITEMSToTerraform, true)(struct!.bACKUPPROTECTEDITEMS),
    b_l_o_b_s_t_o_r_a_g_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesBLOBSTORAGEToTerraform, true)(struct!.bLOBSTORAGE),
    c_l_o_u_d_f_r_o_n_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesCLOUDFRONTToTerraform, true)(struct!.cLOUDFRONT),
    c_l_o_u_d_s_e_a_r_c_h: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesCLOUDSEARCHToTerraform, true)(struct!.cLOUDSEARCH),
    c_o_d_e_b_ui_l_d: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesCODEBUiLDToTerraform, true)(struct!.cODEBUiLD),
    c_o_g_n_i_t_i_v_e_s_e_a_r_c_h: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesCOGNITIVESEARCHToTerraform, true)(struct!.cOGNITIVESEARCH),
    c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesCOGNITIVESERVICESToTerraform, true)(struct!.cOGNITIVESERVICES),
    c_o_g_n_i_t_o: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesCOGNITOToTerraform, true)(struct!.cOGNITO),
    c_o_s_m_o_s_d_b: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesCOSMOSDBToTerraform, true)(struct!.cOSMOSDB),
    d_a_t_a_f_a_c_t_o_r_y: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesDATAFACTORYToTerraform, true)(struct!.dATAFACTORY),
    d_i_r_e_c_t_c_o_n_n_e_c_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesDIRECTCONNECTToTerraform, true)(struct!.dIRECTCONNECT),
    d_m_s_r_e_p_l_i_c_a_t_i_o_n: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONToTerraform, true)(struct!.dMSREPLICATION),
    d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONTASKSToTerraform, true)(struct!.dMSREPLICATIONTASKS),
    d_o_c_d_b: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesDOCDBToTerraform, true)(struct!.dOCDB),
    d_y_n_a_m_o_d_b: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesDYNAMODBToTerraform, true)(struct!.dYNAMODB),
    e_b_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesEBSToTerraform, true)(struct!.eBS),
    e_c2: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesEC2ToTerraform, true)(struct!.eC2),
    e_c_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesECSToTerraform, true)(struct!.eCS),
    e_f_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesEFSToTerraform, true)(struct!.eFS),
    e_l_a_s_t_i_c_a_c_h_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesELASTICACHEToTerraform, true)(struct!.eLASTICACHE),
    e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesELASTICBEANSTALKToTerraform, true)(struct!.eLASTICBEANSTALK),
    e_l_a_s_t_i_c_s_e_a_r_c_h: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesELASTICSEARCHToTerraform, true)(struct!.eLASTICSEARCH),
    e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesELASTICTRANSCODERToTerraform, true)(struct!.eLASTICTRANSCODER),
    e_l_b: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesELBToTerraform, true)(struct!.eLB),
    e_m_r: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesEMRToTerraform, true)(struct!.eMR),
    e_v_e_n_t_b_r_id_g_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesEVENTBRIdGEToTerraform, true)(struct!.eVENTBRIdGE),
    e_v_e_n_t_h_u_b: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesEVENTHUBToTerraform, true)(struct!.eVENTHUB),
    e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesEXPRESSROUTECIRCUiTToTerraform, true)(struct!.eXPRESSROUTECIRCUiT),
    f_i_l_e_s_t_o_r_a_g_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesFILESTORAGEToTerraform, true)(struct!.fILESTORAGE),
    f_i_r_e_h_o_s_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesFIREHOSEToTerraform, true)(struct!.fIREHOSE),
    f_i_r_e_w_a_l_l: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesFIREWALLToTerraform, true)(struct!.fIREWALL),
    f_r_o_n_t_d_o_o_r_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesFRONTDOORSToTerraform, true)(struct!.fRONTDOORS),
    f_s_x: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesFSXToTerraform, true)(struct!.fSX),
    g_l_u_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesGLUEToTerraform, true)(struct!.gLUE),
    k_e_y_v_a_u_l_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesKEYVAULTToTerraform, true)(struct!.kEYVAULT),
    k_i_n_e_s_i_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesKINESISToTerraform, true)(struct!.kINESIS),
    k_i_n_e_s_i_s_v_id_e_o: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesKINESISVIdEOToTerraform, true)(struct!.kINESISVIdEO),
    l_a_m_b_d_a: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesLAMBDAToTerraform, true)(struct!.lAMBDA),
    l_o_a_d_b_a_l_a_n_c_e_r_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesLOADBALANCERSToTerraform, true)(struct!.lOADBALANCERS),
    l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesLOGANALYTICSWORKSPACESToTerraform, true)(struct!.lOGANALYTICSWORKSPACES),
    l_o_g_i_c_a_p_p_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesLOGICAPPSToTerraform, true)(struct!.lOGICAPPS),
    m_e_d_i_a_c_o_n_n_e_c_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesMEDIACONNECTToTerraform, true)(struct!.mEDIACONNECT),
    m_e_d_i_a_c_o_n_v_e_r_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesMEDIACONVERTToTerraform, true)(struct!.mEDIACONVERT),
    m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGELIVEToTerraform, true)(struct!.mEDIAPACKAGELIVE),
    m_e_d_i_a_p_a_c_k_a_g_e_v_o_d: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGEVODToTerraform, true)(struct!.mEDIAPACKAGEVOD),
    m_e_d_i_a_s_t_o_r_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesMEDIASTOREToTerraform, true)(struct!.mEDIASTORE),
    m_e_d_i_a_t_a_i_l_o_r: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesMEDIATAILORToTerraform, true)(struct!.mEDIATAILOR),
    m_q: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesMQToTerraform, true)(struct!.mQ),
    m_s_k_b_r_o_k_e_r: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesMSKBROKERToTerraform, true)(struct!.mSKBROKER),
    m_s_k_c_l_u_s_t_e_r: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesMSKCLUSTERToTerraform, true)(struct!.mSKCLUSTER),
    m_y_sql: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesMYSqlToTerraform, true)(struct!.mYSql),
    n_a_t_g_a_t_e_w_a_y: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesNATGATEWAYToTerraform, true)(struct!.nATGATEWAY),
    n_e_t_w_o_r_k_e_l_b: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesNETWORKELBToTerraform, true)(struct!.nETWORKELB),
    n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesNETWORKINTERFACEToTerraform, true)(struct!.nETWORKINTERFACE),
    o_p_s_w_o_r_k_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesOPSWORKSToTerraform, true)(struct!.oPSWORKS),
    p_o_s_t_g_r_e_sql: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesPOSTGRESqlToTerraform, true)(struct!.pOSTGRESql),
    p_u_b_l_i_c_ip: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesPUBLICIpToTerraform, true)(struct!.pUBLICIp),
    q_u_e_u_e_s_t_o_r_a_g_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesQUEUESTORAGEToTerraform, true)(struct!.qUEUESTORAGE),
    r_d_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesRDSToTerraform, true)(struct!.rDS),
    r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesRECOVERYPROTECTEDITEMToTerraform, true)(struct!.rECOVERYPROTECTEDITEM),
    r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesRECOVERYSERVICESToTerraform, true)(struct!.rECOVERYSERVICES),
    r_e_d_i_s_c_a_c_h_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesREDISCACHEToTerraform, true)(struct!.rEDISCACHE),
    r_e_d_s_h_i_f_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesREDSHIFTToTerraform, true)(struct!.rEDSHIFT),
    r_o_u_t_e53: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesROUTE53ToTerraform, true)(struct!.rOUTE53),
    r_o_u_t_e53_r_e_s_o_l_v_e_r: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesROUTE53RESOLVERToTerraform, true)(struct!.rOUTE53RESOLVER),
    s3: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesS3ToTerraform, true)(struct!.s3),
    s_a_g_e_m_a_k_e_r: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSAGEMAKERToTerraform, true)(struct!.sAGEMAKER),
    s_e_r_v_i_c_e_b_u_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSERVICEBUSToTerraform, true)(struct!.sERVICEBUS),
    s_e_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSESToTerraform, true)(struct!.sES),
    s_n_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSNSToTerraform, true)(struct!.sNS),
    s_q_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSQSToTerraform, true)(struct!.sQS),
    s_t_e_p_f_u_n_c_t_i_o_n_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSTEPFUNCTIONSToTerraform, true)(struct!.sTEPFUNCTIONS),
    s_t_o_r_a_g_e_a_c_c_o_u_n_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSTORAGEACCOUNTToTerraform, true)(struct!.sTORAGEACCOUNT),
    s_w_f_a_c_t_i_v_i_t_y: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSWFACTIVITYToTerraform, true)(struct!.sWFACTIVITY),
    s_w_f_w_o_r_k_f_l_o_w: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSWFWORKFLOWToTerraform, true)(struct!.sWFWORKFLOW),
    s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSYNAPSEWORKSPACESToTerraform, true)(struct!.sYNAPSEWORKSPACES),
    sql_d_a_t_a_b_a_s_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSqlDATABASEToTerraform, true)(struct!.sqlDATABASE),
    sql_e_l_a_s_t_i_c_p_o_o_l: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSqlELASTICPOOLToTerraform, true)(struct!.sqlELASTICPOOL),
    sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesSqlMANAGEDINSTANCEToTerraform, true)(struct!.sqlMANAGEDINSTANCE),
    t_a_b_l_e_s_t_o_r_a_g_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesTABLESTORAGEToTerraform, true)(struct!.tABLESTORAGE),
    t_r_a_f_f_i_c_m_a_n_a_g_e_r: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesTRAFFICMANAGERToTerraform, true)(struct!.tRAFFICMANAGER),
    t_r_a_n_s_i_t_g_a_t_e_w_a_y: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesTRANSITGATEWAYToTerraform, true)(struct!.tRANSITGATEWAY),
    v_i_r_t_u_a_l_d_e_s_k_t_o_p: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVIRTUALDESKTOPToTerraform, true)(struct!.vIRTUALDESKTOP),
    v_i_r_t_u_a_l_m_a_c_h_i_n_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINEToTerraform, true)(struct!.vIRTUALMACHINE),
    v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETToTerraform, true)(struct!.vIRTUALMACHINESCALESET),
    v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETVmToTerraform, true)(struct!.vIRTUALMACHINESCALESETVm),
    v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYToTerraform, true)(struct!.vIRTUALNETWORKGATEWAY),
    v_p_n: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesVPNToTerraform, true)(struct!.vPN),
    w_o_r_k_s_p_a_c_e: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesWORKSPACEToTerraform, true)(struct!.wORKSPACE),
    w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYToTerraform, true)(struct!.wORKSPACEDIRECTORY),
  }
}


export function dataLogicmonitorDeviceGroupExtraServicesToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtraServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a_p_p_l_i_c_a_t_i_o_n_e_l_b: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONELBToHclTerraform, true)(struct!.aPPLICATIONELB),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONELBList",
    },
    a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONGATEWAYToHclTerraform, true)(struct!.aPPLICATIONGATEWAY),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONGATEWAYList",
    },
    a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesAPPLICATIONINSIGHTSToHclTerraform, true)(struct!.aPPLICATIONINSIGHTS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONINSIGHTSList",
    },
    a_p_p_s_e_r_v_i_c_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesAPPSERVICEToHclTerraform, true)(struct!.aPPSERVICE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesAPPSERVICEList",
    },
    a_p_p_s_e_r_v_i_c_e_p_l_a_n: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesAPPSERVICEPLANToHclTerraform, true)(struct!.aPPSERVICEPLAN),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesAPPSERVICEPLANList",
    },
    a_p_p_s_t_r_e_a_m: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesAPPSTREAMToHclTerraform, true)(struct!.aPPSTREAM),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesAPPSTREAMList",
    },
    a_t_h_e_n_a: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesATHENAToHclTerraform, true)(struct!.aTHENA),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesATHENAList",
    },
    a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesAUTOMATIONACCOUNTToHclTerraform, true)(struct!.aUTOMATIONACCOUNT),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesAUTOMATIONACCOUNTList",
    },
    a_u_t_o_s_c_a_l_i_n_g: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesAUTOSCALINGToHclTerraform, true)(struct!.aUTOSCALING),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesAUTOSCALINGList",
    },
    api_g_a_t_e_w_a_y: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesApiGATEWAYToHclTerraform, true)(struct!.apiGATEWAY),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesApiGATEWAYList",
    },
    api_m_a_n_a_g_e_m_e_n_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesApiMANAGEMENTToHclTerraform, true)(struct!.apiMANAGEMENT),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesApiMANAGEMENTList",
    },
    b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesBACKUPPROTECTEDITEMSToHclTerraform, true)(struct!.bACKUPPROTECTEDITEMS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesBACKUPPROTECTEDITEMSList",
    },
    b_l_o_b_s_t_o_r_a_g_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesBLOBSTORAGEToHclTerraform, true)(struct!.bLOBSTORAGE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesBLOBSTORAGEList",
    },
    c_l_o_u_d_f_r_o_n_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesCLOUDFRONTToHclTerraform, true)(struct!.cLOUDFRONT),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesCLOUDFRONTList",
    },
    c_l_o_u_d_s_e_a_r_c_h: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesCLOUDSEARCHToHclTerraform, true)(struct!.cLOUDSEARCH),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesCLOUDSEARCHList",
    },
    c_o_d_e_b_ui_l_d: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesCODEBUiLDToHclTerraform, true)(struct!.cODEBUiLD),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesCODEBUiLDList",
    },
    c_o_g_n_i_t_i_v_e_s_e_a_r_c_h: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesCOGNITIVESEARCHToHclTerraform, true)(struct!.cOGNITIVESEARCH),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESEARCHList",
    },
    c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesCOGNITIVESERVICESToHclTerraform, true)(struct!.cOGNITIVESERVICES),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESERVICESList",
    },
    c_o_g_n_i_t_o: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesCOGNITOToHclTerraform, true)(struct!.cOGNITO),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesCOGNITOList",
    },
    c_o_s_m_o_s_d_b: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesCOSMOSDBToHclTerraform, true)(struct!.cOSMOSDB),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesCOSMOSDBList",
    },
    d_a_t_a_f_a_c_t_o_r_y: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesDATAFACTORYToHclTerraform, true)(struct!.dATAFACTORY),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesDATAFACTORYList",
    },
    d_i_r_e_c_t_c_o_n_n_e_c_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesDIRECTCONNECTToHclTerraform, true)(struct!.dIRECTCONNECT),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesDIRECTCONNECTList",
    },
    d_m_s_r_e_p_l_i_c_a_t_i_o_n: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONToHclTerraform, true)(struct!.dMSREPLICATION),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONList",
    },
    d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONTASKSToHclTerraform, true)(struct!.dMSREPLICATIONTASKS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONTASKSList",
    },
    d_o_c_d_b: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesDOCDBToHclTerraform, true)(struct!.dOCDB),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesDOCDBList",
    },
    d_y_n_a_m_o_d_b: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesDYNAMODBToHclTerraform, true)(struct!.dYNAMODB),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesDYNAMODBList",
    },
    e_b_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesEBSToHclTerraform, true)(struct!.eBS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesEBSList",
    },
    e_c2: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesEC2ToHclTerraform, true)(struct!.eC2),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesEC2List",
    },
    e_c_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesECSToHclTerraform, true)(struct!.eCS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesECSList",
    },
    e_f_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesEFSToHclTerraform, true)(struct!.eFS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesEFSList",
    },
    e_l_a_s_t_i_c_a_c_h_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesELASTICACHEToHclTerraform, true)(struct!.eLASTICACHE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesELASTICACHEList",
    },
    e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesELASTICBEANSTALKToHclTerraform, true)(struct!.eLASTICBEANSTALK),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesELASTICBEANSTALKList",
    },
    e_l_a_s_t_i_c_s_e_a_r_c_h: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesELASTICSEARCHToHclTerraform, true)(struct!.eLASTICSEARCH),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesELASTICSEARCHList",
    },
    e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesELASTICTRANSCODERToHclTerraform, true)(struct!.eLASTICTRANSCODER),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesELASTICTRANSCODERList",
    },
    e_l_b: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesELBToHclTerraform, true)(struct!.eLB),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesELBList",
    },
    e_m_r: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesEMRToHclTerraform, true)(struct!.eMR),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesEMRList",
    },
    e_v_e_n_t_b_r_id_g_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesEVENTBRIdGEToHclTerraform, true)(struct!.eVENTBRIdGE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesEVENTBRIdGEList",
    },
    e_v_e_n_t_h_u_b: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesEVENTHUBToHclTerraform, true)(struct!.eVENTHUB),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesEVENTHUBList",
    },
    e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesEXPRESSROUTECIRCUiTToHclTerraform, true)(struct!.eXPRESSROUTECIRCUiT),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesEXPRESSROUTECIRCUiTList",
    },
    f_i_l_e_s_t_o_r_a_g_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesFILESTORAGEToHclTerraform, true)(struct!.fILESTORAGE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesFILESTORAGEList",
    },
    f_i_r_e_h_o_s_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesFIREHOSEToHclTerraform, true)(struct!.fIREHOSE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesFIREHOSEList",
    },
    f_i_r_e_w_a_l_l: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesFIREWALLToHclTerraform, true)(struct!.fIREWALL),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesFIREWALLList",
    },
    f_r_o_n_t_d_o_o_r_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesFRONTDOORSToHclTerraform, true)(struct!.fRONTDOORS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesFRONTDOORSList",
    },
    f_s_x: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesFSXToHclTerraform, true)(struct!.fSX),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesFSXList",
    },
    g_l_u_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesGLUEToHclTerraform, true)(struct!.gLUE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesGLUEList",
    },
    k_e_y_v_a_u_l_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesKEYVAULTToHclTerraform, true)(struct!.kEYVAULT),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesKEYVAULTList",
    },
    k_i_n_e_s_i_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesKINESISToHclTerraform, true)(struct!.kINESIS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesKINESISList",
    },
    k_i_n_e_s_i_s_v_id_e_o: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesKINESISVIdEOToHclTerraform, true)(struct!.kINESISVIdEO),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesKINESISVIdEOList",
    },
    l_a_m_b_d_a: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesLAMBDAToHclTerraform, true)(struct!.lAMBDA),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesLAMBDAList",
    },
    l_o_a_d_b_a_l_a_n_c_e_r_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesLOADBALANCERSToHclTerraform, true)(struct!.lOADBALANCERS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesLOADBALANCERSList",
    },
    l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesLOGANALYTICSWORKSPACESToHclTerraform, true)(struct!.lOGANALYTICSWORKSPACES),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesLOGANALYTICSWORKSPACESList",
    },
    l_o_g_i_c_a_p_p_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesLOGICAPPSToHclTerraform, true)(struct!.lOGICAPPS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesLOGICAPPSList",
    },
    m_e_d_i_a_c_o_n_n_e_c_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesMEDIACONNECTToHclTerraform, true)(struct!.mEDIACONNECT),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesMEDIACONNECTList",
    },
    m_e_d_i_a_c_o_n_v_e_r_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesMEDIACONVERTToHclTerraform, true)(struct!.mEDIACONVERT),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesMEDIACONVERTList",
    },
    m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGELIVEToHclTerraform, true)(struct!.mEDIAPACKAGELIVE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGELIVEList",
    },
    m_e_d_i_a_p_a_c_k_a_g_e_v_o_d: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGEVODToHclTerraform, true)(struct!.mEDIAPACKAGEVOD),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGEVODList",
    },
    m_e_d_i_a_s_t_o_r_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesMEDIASTOREToHclTerraform, true)(struct!.mEDIASTORE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesMEDIASTOREList",
    },
    m_e_d_i_a_t_a_i_l_o_r: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesMEDIATAILORToHclTerraform, true)(struct!.mEDIATAILOR),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesMEDIATAILORList",
    },
    m_q: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesMQToHclTerraform, true)(struct!.mQ),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesMQList",
    },
    m_s_k_b_r_o_k_e_r: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesMSKBROKERToHclTerraform, true)(struct!.mSKBROKER),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesMSKBROKERList",
    },
    m_s_k_c_l_u_s_t_e_r: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesMSKCLUSTERToHclTerraform, true)(struct!.mSKCLUSTER),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesMSKCLUSTERList",
    },
    m_y_sql: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesMYSqlToHclTerraform, true)(struct!.mYSql),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesMYSqlList",
    },
    n_a_t_g_a_t_e_w_a_y: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesNATGATEWAYToHclTerraform, true)(struct!.nATGATEWAY),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesNATGATEWAYList",
    },
    n_e_t_w_o_r_k_e_l_b: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesNETWORKELBToHclTerraform, true)(struct!.nETWORKELB),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesNETWORKELBList",
    },
    n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesNETWORKINTERFACEToHclTerraform, true)(struct!.nETWORKINTERFACE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesNETWORKINTERFACEList",
    },
    o_p_s_w_o_r_k_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesOPSWORKSToHclTerraform, true)(struct!.oPSWORKS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesOPSWORKSList",
    },
    p_o_s_t_g_r_e_sql: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesPOSTGRESqlToHclTerraform, true)(struct!.pOSTGRESql),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesPOSTGRESqlList",
    },
    p_u_b_l_i_c_ip: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesPUBLICIpToHclTerraform, true)(struct!.pUBLICIp),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesPUBLICIpList",
    },
    q_u_e_u_e_s_t_o_r_a_g_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesQUEUESTORAGEToHclTerraform, true)(struct!.qUEUESTORAGE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesQUEUESTORAGEList",
    },
    r_d_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesRDSToHclTerraform, true)(struct!.rDS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesRDSList",
    },
    r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesRECOVERYPROTECTEDITEMToHclTerraform, true)(struct!.rECOVERYPROTECTEDITEM),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesRECOVERYPROTECTEDITEMList",
    },
    r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesRECOVERYSERVICESToHclTerraform, true)(struct!.rECOVERYSERVICES),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesRECOVERYSERVICESList",
    },
    r_e_d_i_s_c_a_c_h_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesREDISCACHEToHclTerraform, true)(struct!.rEDISCACHE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesREDISCACHEList",
    },
    r_e_d_s_h_i_f_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesREDSHIFTToHclTerraform, true)(struct!.rEDSHIFT),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesREDSHIFTList",
    },
    r_o_u_t_e53: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesROUTE53ToHclTerraform, true)(struct!.rOUTE53),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesROUTE53List",
    },
    r_o_u_t_e53_r_e_s_o_l_v_e_r: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesROUTE53RESOLVERToHclTerraform, true)(struct!.rOUTE53RESOLVER),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesROUTE53RESOLVERList",
    },
    s3: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesS3ToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesS3List",
    },
    s_a_g_e_m_a_k_e_r: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSAGEMAKERToHclTerraform, true)(struct!.sAGEMAKER),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSAGEMAKERList",
    },
    s_e_r_v_i_c_e_b_u_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSERVICEBUSToHclTerraform, true)(struct!.sERVICEBUS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSERVICEBUSList",
    },
    s_e_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSESToHclTerraform, true)(struct!.sES),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSESList",
    },
    s_n_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSNSToHclTerraform, true)(struct!.sNS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSNSList",
    },
    s_q_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSQSToHclTerraform, true)(struct!.sQS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSQSList",
    },
    s_t_e_p_f_u_n_c_t_i_o_n_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSTEPFUNCTIONSToHclTerraform, true)(struct!.sTEPFUNCTIONS),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSTEPFUNCTIONSList",
    },
    s_t_o_r_a_g_e_a_c_c_o_u_n_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSTORAGEACCOUNTToHclTerraform, true)(struct!.sTORAGEACCOUNT),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSTORAGEACCOUNTList",
    },
    s_w_f_a_c_t_i_v_i_t_y: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSWFACTIVITYToHclTerraform, true)(struct!.sWFACTIVITY),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSWFACTIVITYList",
    },
    s_w_f_w_o_r_k_f_l_o_w: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSWFWORKFLOWToHclTerraform, true)(struct!.sWFWORKFLOW),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSWFWORKFLOWList",
    },
    s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSYNAPSEWORKSPACESToHclTerraform, true)(struct!.sYNAPSEWORKSPACES),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSYNAPSEWORKSPACESList",
    },
    sql_d_a_t_a_b_a_s_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSqlDATABASEToHclTerraform, true)(struct!.sqlDATABASE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSqlDATABASEList",
    },
    sql_e_l_a_s_t_i_c_p_o_o_l: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSqlELASTICPOOLToHclTerraform, true)(struct!.sqlELASTICPOOL),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSqlELASTICPOOLList",
    },
    sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesSqlMANAGEDINSTANCEToHclTerraform, true)(struct!.sqlMANAGEDINSTANCE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesSqlMANAGEDINSTANCEList",
    },
    t_a_b_l_e_s_t_o_r_a_g_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesTABLESTORAGEToHclTerraform, true)(struct!.tABLESTORAGE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesTABLESTORAGEList",
    },
    t_r_a_f_f_i_c_m_a_n_a_g_e_r: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesTRAFFICMANAGERToHclTerraform, true)(struct!.tRAFFICMANAGER),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesTRAFFICMANAGERList",
    },
    t_r_a_n_s_i_t_g_a_t_e_w_a_y: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesTRANSITGATEWAYToHclTerraform, true)(struct!.tRANSITGATEWAY),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesTRANSITGATEWAYList",
    },
    v_i_r_t_u_a_l_d_e_s_k_t_o_p: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVIRTUALDESKTOPToHclTerraform, true)(struct!.vIRTUALDESKTOP),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVIRTUALDESKTOPList",
    },
    v_i_r_t_u_a_l_m_a_c_h_i_n_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINEToHclTerraform, true)(struct!.vIRTUALMACHINE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINEList",
    },
    v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETToHclTerraform, true)(struct!.vIRTUALMACHINESCALESET),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETList",
    },
    v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETVmToHclTerraform, true)(struct!.vIRTUALMACHINESCALESETVm),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETVmList",
    },
    v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYToHclTerraform, true)(struct!.vIRTUALNETWORKGATEWAY),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYList",
    },
    v_p_n: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesVPNToHclTerraform, true)(struct!.vPN),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesVPNList",
    },
    w_o_r_k_s_p_a_c_e: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesWORKSPACEToHclTerraform, true)(struct!.wORKSPACE),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesWORKSPACEList",
    },
    w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYToHclTerraform, true)(struct!.wORKSPACEDIRECTORY),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtraServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aPPLICATIONELB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPLICATIONELB = this._aPPLICATIONELB?.internalValue;
    }
    if (this._aPPLICATIONGATEWAY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPLICATIONGATEWAY = this._aPPLICATIONGATEWAY?.internalValue;
    }
    if (this._aPPLICATIONINSIGHTS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPLICATIONINSIGHTS = this._aPPLICATIONINSIGHTS?.internalValue;
    }
    if (this._aPPSERVICE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPSERVICE = this._aPPSERVICE?.internalValue;
    }
    if (this._aPPSERVICEPLAN?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPSERVICEPLAN = this._aPPSERVICEPLAN?.internalValue;
    }
    if (this._aPPSTREAM?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPSTREAM = this._aPPSTREAM?.internalValue;
    }
    if (this._aTHENA?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aTHENA = this._aTHENA?.internalValue;
    }
    if (this._aUTOMATIONACCOUNT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aUTOMATIONACCOUNT = this._aUTOMATIONACCOUNT?.internalValue;
    }
    if (this._aUTOSCALING?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aUTOSCALING = this._aUTOSCALING?.internalValue;
    }
    if (this._apiGATEWAY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGATEWAY = this._apiGATEWAY?.internalValue;
    }
    if (this._apiMANAGEMENT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiMANAGEMENT = this._apiMANAGEMENT?.internalValue;
    }
    if (this._bACKUPPROTECTEDITEMS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bACKUPPROTECTEDITEMS = this._bACKUPPROTECTEDITEMS?.internalValue;
    }
    if (this._bLOBSTORAGE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bLOBSTORAGE = this._bLOBSTORAGE?.internalValue;
    }
    if (this._cLOUDFRONT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cLOUDFRONT = this._cLOUDFRONT?.internalValue;
    }
    if (this._cLOUDSEARCH?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cLOUDSEARCH = this._cLOUDSEARCH?.internalValue;
    }
    if (this._cODEBUiLD?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cODEBUiLD = this._cODEBUiLD?.internalValue;
    }
    if (this._cOGNITIVESEARCH?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cOGNITIVESEARCH = this._cOGNITIVESEARCH?.internalValue;
    }
    if (this._cOGNITIVESERVICES?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cOGNITIVESERVICES = this._cOGNITIVESERVICES?.internalValue;
    }
    if (this._cOGNITO?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cOGNITO = this._cOGNITO?.internalValue;
    }
    if (this._cOSMOSDB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cOSMOSDB = this._cOSMOSDB?.internalValue;
    }
    if (this._dATAFACTORY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dATAFACTORY = this._dATAFACTORY?.internalValue;
    }
    if (this._dIRECTCONNECT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dIRECTCONNECT = this._dIRECTCONNECT?.internalValue;
    }
    if (this._dMSREPLICATION?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dMSREPLICATION = this._dMSREPLICATION?.internalValue;
    }
    if (this._dMSREPLICATIONTASKS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dMSREPLICATIONTASKS = this._dMSREPLICATIONTASKS?.internalValue;
    }
    if (this._dOCDB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dOCDB = this._dOCDB?.internalValue;
    }
    if (this._dYNAMODB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dYNAMODB = this._dYNAMODB?.internalValue;
    }
    if (this._eBS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eBS = this._eBS?.internalValue;
    }
    if (this._eC2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eC2 = this._eC2?.internalValue;
    }
    if (this._eCS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eCS = this._eCS?.internalValue;
    }
    if (this._eFS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eFS = this._eFS?.internalValue;
    }
    if (this._eLASTICACHE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eLASTICACHE = this._eLASTICACHE?.internalValue;
    }
    if (this._eLASTICBEANSTALK?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eLASTICBEANSTALK = this._eLASTICBEANSTALK?.internalValue;
    }
    if (this._eLASTICSEARCH?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eLASTICSEARCH = this._eLASTICSEARCH?.internalValue;
    }
    if (this._eLASTICTRANSCODER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eLASTICTRANSCODER = this._eLASTICTRANSCODER?.internalValue;
    }
    if (this._eLB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eLB = this._eLB?.internalValue;
    }
    if (this._eMR?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eMR = this._eMR?.internalValue;
    }
    if (this._eVENTBRIdGE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eVENTBRIdGE = this._eVENTBRIdGE?.internalValue;
    }
    if (this._eVENTHUB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eVENTHUB = this._eVENTHUB?.internalValue;
    }
    if (this._eXPRESSROUTECIRCUiT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eXPRESSROUTECIRCUiT = this._eXPRESSROUTECIRCUiT?.internalValue;
    }
    if (this._fILESTORAGE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fILESTORAGE = this._fILESTORAGE?.internalValue;
    }
    if (this._fIREHOSE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fIREHOSE = this._fIREHOSE?.internalValue;
    }
    if (this._fIREWALL?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fIREWALL = this._fIREWALL?.internalValue;
    }
    if (this._fRONTDOORS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fRONTDOORS = this._fRONTDOORS?.internalValue;
    }
    if (this._fSX?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fSX = this._fSX?.internalValue;
    }
    if (this._gLUE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gLUE = this._gLUE?.internalValue;
    }
    if (this._kEYVAULT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kEYVAULT = this._kEYVAULT?.internalValue;
    }
    if (this._kINESIS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kINESIS = this._kINESIS?.internalValue;
    }
    if (this._kINESISVIdEO?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kINESISVIdEO = this._kINESISVIdEO?.internalValue;
    }
    if (this._lAMBDA?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lAMBDA = this._lAMBDA?.internalValue;
    }
    if (this._lOADBALANCERS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lOADBALANCERS = this._lOADBALANCERS?.internalValue;
    }
    if (this._lOGANALYTICSWORKSPACES?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lOGANALYTICSWORKSPACES = this._lOGANALYTICSWORKSPACES?.internalValue;
    }
    if (this._lOGICAPPS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lOGICAPPS = this._lOGICAPPS?.internalValue;
    }
    if (this._mEDIACONNECT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIACONNECT = this._mEDIACONNECT?.internalValue;
    }
    if (this._mEDIACONVERT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIACONVERT = this._mEDIACONVERT?.internalValue;
    }
    if (this._mEDIAPACKAGELIVE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIAPACKAGELIVE = this._mEDIAPACKAGELIVE?.internalValue;
    }
    if (this._mEDIAPACKAGEVOD?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIAPACKAGEVOD = this._mEDIAPACKAGEVOD?.internalValue;
    }
    if (this._mEDIASTORE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIASTORE = this._mEDIASTORE?.internalValue;
    }
    if (this._mEDIATAILOR?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIATAILOR = this._mEDIATAILOR?.internalValue;
    }
    if (this._mQ?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mQ = this._mQ?.internalValue;
    }
    if (this._mSKBROKER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mSKBROKER = this._mSKBROKER?.internalValue;
    }
    if (this._mSKCLUSTER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mSKCLUSTER = this._mSKCLUSTER?.internalValue;
    }
    if (this._mYSql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mYSql = this._mYSql?.internalValue;
    }
    if (this._nATGATEWAY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nATGATEWAY = this._nATGATEWAY?.internalValue;
    }
    if (this._nETWORKELB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nETWORKELB = this._nETWORKELB?.internalValue;
    }
    if (this._nETWORKINTERFACE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nETWORKINTERFACE = this._nETWORKINTERFACE?.internalValue;
    }
    if (this._oPSWORKS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oPSWORKS = this._oPSWORKS?.internalValue;
    }
    if (this._pOSTGRESql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pOSTGRESql = this._pOSTGRESql?.internalValue;
    }
    if (this._pUBLICIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pUBLICIp = this._pUBLICIp?.internalValue;
    }
    if (this._qUEUESTORAGE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qUEUESTORAGE = this._qUEUESTORAGE?.internalValue;
    }
    if (this._rDS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rDS = this._rDS?.internalValue;
    }
    if (this._rECOVERYPROTECTEDITEM?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rECOVERYPROTECTEDITEM = this._rECOVERYPROTECTEDITEM?.internalValue;
    }
    if (this._rECOVERYSERVICES?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rECOVERYSERVICES = this._rECOVERYSERVICES?.internalValue;
    }
    if (this._rEDISCACHE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rEDISCACHE = this._rEDISCACHE?.internalValue;
    }
    if (this._rEDSHIFT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rEDSHIFT = this._rEDSHIFT?.internalValue;
    }
    if (this._rOUTE53?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rOUTE53 = this._rOUTE53?.internalValue;
    }
    if (this._rOUTE53RESOLVER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rOUTE53RESOLVER = this._rOUTE53RESOLVER?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._sAGEMAKER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sAGEMAKER = this._sAGEMAKER?.internalValue;
    }
    if (this._sERVICEBUS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sERVICEBUS = this._sERVICEBUS?.internalValue;
    }
    if (this._sES?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sES = this._sES?.internalValue;
    }
    if (this._sNS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sNS = this._sNS?.internalValue;
    }
    if (this._sQS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sQS = this._sQS?.internalValue;
    }
    if (this._sTEPFUNCTIONS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sTEPFUNCTIONS = this._sTEPFUNCTIONS?.internalValue;
    }
    if (this._sTORAGEACCOUNT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sTORAGEACCOUNT = this._sTORAGEACCOUNT?.internalValue;
    }
    if (this._sWFACTIVITY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sWFACTIVITY = this._sWFACTIVITY?.internalValue;
    }
    if (this._sWFWORKFLOW?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sWFWORKFLOW = this._sWFWORKFLOW?.internalValue;
    }
    if (this._sYNAPSEWORKSPACES?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sYNAPSEWORKSPACES = this._sYNAPSEWORKSPACES?.internalValue;
    }
    if (this._sqlDATABASE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlDATABASE = this._sqlDATABASE?.internalValue;
    }
    if (this._sqlELASTICPOOL?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlELASTICPOOL = this._sqlELASTICPOOL?.internalValue;
    }
    if (this._sqlMANAGEDINSTANCE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlMANAGEDINSTANCE = this._sqlMANAGEDINSTANCE?.internalValue;
    }
    if (this._tABLESTORAGE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tABLESTORAGE = this._tABLESTORAGE?.internalValue;
    }
    if (this._tRAFFICMANAGER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tRAFFICMANAGER = this._tRAFFICMANAGER?.internalValue;
    }
    if (this._tRANSITGATEWAY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tRANSITGATEWAY = this._tRANSITGATEWAY?.internalValue;
    }
    if (this._vIRTUALDESKTOP?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vIRTUALDESKTOP = this._vIRTUALDESKTOP?.internalValue;
    }
    if (this._vIRTUALMACHINE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vIRTUALMACHINE = this._vIRTUALMACHINE?.internalValue;
    }
    if (this._vIRTUALMACHINESCALESET?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vIRTUALMACHINESCALESET = this._vIRTUALMACHINESCALESET?.internalValue;
    }
    if (this._vIRTUALMACHINESCALESETVm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vIRTUALMACHINESCALESETVm = this._vIRTUALMACHINESCALESETVm?.internalValue;
    }
    if (this._vIRTUALNETWORKGATEWAY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vIRTUALNETWORKGATEWAY = this._vIRTUALNETWORKGATEWAY?.internalValue;
    }
    if (this._vPN?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vPN = this._vPN?.internalValue;
    }
    if (this._wORKSPACE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wORKSPACE = this._wORKSPACE?.internalValue;
    }
    if (this._wORKSPACEDIRECTORY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wORKSPACEDIRECTORY = this._wORKSPACEDIRECTORY?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtraServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aPPLICATIONELB.internalValue = undefined;
      this._aPPLICATIONGATEWAY.internalValue = undefined;
      this._aPPLICATIONINSIGHTS.internalValue = undefined;
      this._aPPSERVICE.internalValue = undefined;
      this._aPPSERVICEPLAN.internalValue = undefined;
      this._aPPSTREAM.internalValue = undefined;
      this._aTHENA.internalValue = undefined;
      this._aUTOMATIONACCOUNT.internalValue = undefined;
      this._aUTOSCALING.internalValue = undefined;
      this._apiGATEWAY.internalValue = undefined;
      this._apiMANAGEMENT.internalValue = undefined;
      this._bACKUPPROTECTEDITEMS.internalValue = undefined;
      this._bLOBSTORAGE.internalValue = undefined;
      this._cLOUDFRONT.internalValue = undefined;
      this._cLOUDSEARCH.internalValue = undefined;
      this._cODEBUiLD.internalValue = undefined;
      this._cOGNITIVESEARCH.internalValue = undefined;
      this._cOGNITIVESERVICES.internalValue = undefined;
      this._cOGNITO.internalValue = undefined;
      this._cOSMOSDB.internalValue = undefined;
      this._dATAFACTORY.internalValue = undefined;
      this._dIRECTCONNECT.internalValue = undefined;
      this._dMSREPLICATION.internalValue = undefined;
      this._dMSREPLICATIONTASKS.internalValue = undefined;
      this._dOCDB.internalValue = undefined;
      this._dYNAMODB.internalValue = undefined;
      this._eBS.internalValue = undefined;
      this._eC2.internalValue = undefined;
      this._eCS.internalValue = undefined;
      this._eFS.internalValue = undefined;
      this._eLASTICACHE.internalValue = undefined;
      this._eLASTICBEANSTALK.internalValue = undefined;
      this._eLASTICSEARCH.internalValue = undefined;
      this._eLASTICTRANSCODER.internalValue = undefined;
      this._eLB.internalValue = undefined;
      this._eMR.internalValue = undefined;
      this._eVENTBRIdGE.internalValue = undefined;
      this._eVENTHUB.internalValue = undefined;
      this._eXPRESSROUTECIRCUiT.internalValue = undefined;
      this._fILESTORAGE.internalValue = undefined;
      this._fIREHOSE.internalValue = undefined;
      this._fIREWALL.internalValue = undefined;
      this._fRONTDOORS.internalValue = undefined;
      this._fSX.internalValue = undefined;
      this._gLUE.internalValue = undefined;
      this._kEYVAULT.internalValue = undefined;
      this._kINESIS.internalValue = undefined;
      this._kINESISVIdEO.internalValue = undefined;
      this._lAMBDA.internalValue = undefined;
      this._lOADBALANCERS.internalValue = undefined;
      this._lOGANALYTICSWORKSPACES.internalValue = undefined;
      this._lOGICAPPS.internalValue = undefined;
      this._mEDIACONNECT.internalValue = undefined;
      this._mEDIACONVERT.internalValue = undefined;
      this._mEDIAPACKAGELIVE.internalValue = undefined;
      this._mEDIAPACKAGEVOD.internalValue = undefined;
      this._mEDIASTORE.internalValue = undefined;
      this._mEDIATAILOR.internalValue = undefined;
      this._mQ.internalValue = undefined;
      this._mSKBROKER.internalValue = undefined;
      this._mSKCLUSTER.internalValue = undefined;
      this._mYSql.internalValue = undefined;
      this._nATGATEWAY.internalValue = undefined;
      this._nETWORKELB.internalValue = undefined;
      this._nETWORKINTERFACE.internalValue = undefined;
      this._oPSWORKS.internalValue = undefined;
      this._pOSTGRESql.internalValue = undefined;
      this._pUBLICIp.internalValue = undefined;
      this._qUEUESTORAGE.internalValue = undefined;
      this._rDS.internalValue = undefined;
      this._rECOVERYPROTECTEDITEM.internalValue = undefined;
      this._rECOVERYSERVICES.internalValue = undefined;
      this._rEDISCACHE.internalValue = undefined;
      this._rEDSHIFT.internalValue = undefined;
      this._rOUTE53.internalValue = undefined;
      this._rOUTE53RESOLVER.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._sAGEMAKER.internalValue = undefined;
      this._sERVICEBUS.internalValue = undefined;
      this._sES.internalValue = undefined;
      this._sNS.internalValue = undefined;
      this._sQS.internalValue = undefined;
      this._sTEPFUNCTIONS.internalValue = undefined;
      this._sTORAGEACCOUNT.internalValue = undefined;
      this._sWFACTIVITY.internalValue = undefined;
      this._sWFWORKFLOW.internalValue = undefined;
      this._sYNAPSEWORKSPACES.internalValue = undefined;
      this._sqlDATABASE.internalValue = undefined;
      this._sqlELASTICPOOL.internalValue = undefined;
      this._sqlMANAGEDINSTANCE.internalValue = undefined;
      this._tABLESTORAGE.internalValue = undefined;
      this._tRAFFICMANAGER.internalValue = undefined;
      this._tRANSITGATEWAY.internalValue = undefined;
      this._vIRTUALDESKTOP.internalValue = undefined;
      this._vIRTUALMACHINE.internalValue = undefined;
      this._vIRTUALMACHINESCALESET.internalValue = undefined;
      this._vIRTUALMACHINESCALESETVm.internalValue = undefined;
      this._vIRTUALNETWORKGATEWAY.internalValue = undefined;
      this._vPN.internalValue = undefined;
      this._wORKSPACE.internalValue = undefined;
      this._wORKSPACEDIRECTORY.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aPPLICATIONELB.internalValue = value.aPPLICATIONELB;
      this._aPPLICATIONGATEWAY.internalValue = value.aPPLICATIONGATEWAY;
      this._aPPLICATIONINSIGHTS.internalValue = value.aPPLICATIONINSIGHTS;
      this._aPPSERVICE.internalValue = value.aPPSERVICE;
      this._aPPSERVICEPLAN.internalValue = value.aPPSERVICEPLAN;
      this._aPPSTREAM.internalValue = value.aPPSTREAM;
      this._aTHENA.internalValue = value.aTHENA;
      this._aUTOMATIONACCOUNT.internalValue = value.aUTOMATIONACCOUNT;
      this._aUTOSCALING.internalValue = value.aUTOSCALING;
      this._apiGATEWAY.internalValue = value.apiGATEWAY;
      this._apiMANAGEMENT.internalValue = value.apiMANAGEMENT;
      this._bACKUPPROTECTEDITEMS.internalValue = value.bACKUPPROTECTEDITEMS;
      this._bLOBSTORAGE.internalValue = value.bLOBSTORAGE;
      this._cLOUDFRONT.internalValue = value.cLOUDFRONT;
      this._cLOUDSEARCH.internalValue = value.cLOUDSEARCH;
      this._cODEBUiLD.internalValue = value.cODEBUiLD;
      this._cOGNITIVESEARCH.internalValue = value.cOGNITIVESEARCH;
      this._cOGNITIVESERVICES.internalValue = value.cOGNITIVESERVICES;
      this._cOGNITO.internalValue = value.cOGNITO;
      this._cOSMOSDB.internalValue = value.cOSMOSDB;
      this._dATAFACTORY.internalValue = value.dATAFACTORY;
      this._dIRECTCONNECT.internalValue = value.dIRECTCONNECT;
      this._dMSREPLICATION.internalValue = value.dMSREPLICATION;
      this._dMSREPLICATIONTASKS.internalValue = value.dMSREPLICATIONTASKS;
      this._dOCDB.internalValue = value.dOCDB;
      this._dYNAMODB.internalValue = value.dYNAMODB;
      this._eBS.internalValue = value.eBS;
      this._eC2.internalValue = value.eC2;
      this._eCS.internalValue = value.eCS;
      this._eFS.internalValue = value.eFS;
      this._eLASTICACHE.internalValue = value.eLASTICACHE;
      this._eLASTICBEANSTALK.internalValue = value.eLASTICBEANSTALK;
      this._eLASTICSEARCH.internalValue = value.eLASTICSEARCH;
      this._eLASTICTRANSCODER.internalValue = value.eLASTICTRANSCODER;
      this._eLB.internalValue = value.eLB;
      this._eMR.internalValue = value.eMR;
      this._eVENTBRIdGE.internalValue = value.eVENTBRIdGE;
      this._eVENTHUB.internalValue = value.eVENTHUB;
      this._eXPRESSROUTECIRCUiT.internalValue = value.eXPRESSROUTECIRCUiT;
      this._fILESTORAGE.internalValue = value.fILESTORAGE;
      this._fIREHOSE.internalValue = value.fIREHOSE;
      this._fIREWALL.internalValue = value.fIREWALL;
      this._fRONTDOORS.internalValue = value.fRONTDOORS;
      this._fSX.internalValue = value.fSX;
      this._gLUE.internalValue = value.gLUE;
      this._kEYVAULT.internalValue = value.kEYVAULT;
      this._kINESIS.internalValue = value.kINESIS;
      this._kINESISVIdEO.internalValue = value.kINESISVIdEO;
      this._lAMBDA.internalValue = value.lAMBDA;
      this._lOADBALANCERS.internalValue = value.lOADBALANCERS;
      this._lOGANALYTICSWORKSPACES.internalValue = value.lOGANALYTICSWORKSPACES;
      this._lOGICAPPS.internalValue = value.lOGICAPPS;
      this._mEDIACONNECT.internalValue = value.mEDIACONNECT;
      this._mEDIACONVERT.internalValue = value.mEDIACONVERT;
      this._mEDIAPACKAGELIVE.internalValue = value.mEDIAPACKAGELIVE;
      this._mEDIAPACKAGEVOD.internalValue = value.mEDIAPACKAGEVOD;
      this._mEDIASTORE.internalValue = value.mEDIASTORE;
      this._mEDIATAILOR.internalValue = value.mEDIATAILOR;
      this._mQ.internalValue = value.mQ;
      this._mSKBROKER.internalValue = value.mSKBROKER;
      this._mSKCLUSTER.internalValue = value.mSKCLUSTER;
      this._mYSql.internalValue = value.mYSql;
      this._nATGATEWAY.internalValue = value.nATGATEWAY;
      this._nETWORKELB.internalValue = value.nETWORKELB;
      this._nETWORKINTERFACE.internalValue = value.nETWORKINTERFACE;
      this._oPSWORKS.internalValue = value.oPSWORKS;
      this._pOSTGRESql.internalValue = value.pOSTGRESql;
      this._pUBLICIp.internalValue = value.pUBLICIp;
      this._qUEUESTORAGE.internalValue = value.qUEUESTORAGE;
      this._rDS.internalValue = value.rDS;
      this._rECOVERYPROTECTEDITEM.internalValue = value.rECOVERYPROTECTEDITEM;
      this._rECOVERYSERVICES.internalValue = value.rECOVERYSERVICES;
      this._rEDISCACHE.internalValue = value.rEDISCACHE;
      this._rEDSHIFT.internalValue = value.rEDSHIFT;
      this._rOUTE53.internalValue = value.rOUTE53;
      this._rOUTE53RESOLVER.internalValue = value.rOUTE53RESOLVER;
      this._s3.internalValue = value.s3;
      this._sAGEMAKER.internalValue = value.sAGEMAKER;
      this._sERVICEBUS.internalValue = value.sERVICEBUS;
      this._sES.internalValue = value.sES;
      this._sNS.internalValue = value.sNS;
      this._sQS.internalValue = value.sQS;
      this._sTEPFUNCTIONS.internalValue = value.sTEPFUNCTIONS;
      this._sTORAGEACCOUNT.internalValue = value.sTORAGEACCOUNT;
      this._sWFACTIVITY.internalValue = value.sWFACTIVITY;
      this._sWFWORKFLOW.internalValue = value.sWFWORKFLOW;
      this._sYNAPSEWORKSPACES.internalValue = value.sYNAPSEWORKSPACES;
      this._sqlDATABASE.internalValue = value.sqlDATABASE;
      this._sqlELASTICPOOL.internalValue = value.sqlELASTICPOOL;
      this._sqlMANAGEDINSTANCE.internalValue = value.sqlMANAGEDINSTANCE;
      this._tABLESTORAGE.internalValue = value.tABLESTORAGE;
      this._tRAFFICMANAGER.internalValue = value.tRAFFICMANAGER;
      this._tRANSITGATEWAY.internalValue = value.tRANSITGATEWAY;
      this._vIRTUALDESKTOP.internalValue = value.vIRTUALDESKTOP;
      this._vIRTUALMACHINE.internalValue = value.vIRTUALMACHINE;
      this._vIRTUALMACHINESCALESET.internalValue = value.vIRTUALMACHINESCALESET;
      this._vIRTUALMACHINESCALESETVm.internalValue = value.vIRTUALMACHINESCALESETVm;
      this._vIRTUALNETWORKGATEWAY.internalValue = value.vIRTUALNETWORKGATEWAY;
      this._vPN.internalValue = value.vPN;
      this._wORKSPACE.internalValue = value.wORKSPACE;
      this._wORKSPACEDIRECTORY.internalValue = value.wORKSPACEDIRECTORY;
    }
  }

  // a_p_p_l_i_c_a_t_i_o_n_e_l_b - computed: false, optional: true, required: false
  private _aPPLICATIONELB = new DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONELBList(this, "a_p_p_l_i_c_a_t_i_o_n_e_l_b", false);
  public get aPPLICATIONELB() {
    return this._aPPLICATIONELB;
  }
  public putAPPLICATIONELB(value: DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONELB[] | cdktf.IResolvable) {
    this._aPPLICATIONELB.internalValue = value;
  }
  public resetAPPLICATIONELB() {
    this._aPPLICATIONELB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPLICATIONELBInput() {
    return this._aPPLICATIONELB.internalValue;
  }

  // a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y - computed: false, optional: true, required: false
  private _aPPLICATIONGATEWAY = new DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONGATEWAYList(this, "a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y", false);
  public get aPPLICATIONGATEWAY() {
    return this._aPPLICATIONGATEWAY;
  }
  public putAPPLICATIONGATEWAY(value: DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONGATEWAY[] | cdktf.IResolvable) {
    this._aPPLICATIONGATEWAY.internalValue = value;
  }
  public resetAPPLICATIONGATEWAY() {
    this._aPPLICATIONGATEWAY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPLICATIONGATEWAYInput() {
    return this._aPPLICATIONGATEWAY.internalValue;
  }

  // a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s - computed: false, optional: true, required: false
  private _aPPLICATIONINSIGHTS = new DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONINSIGHTSList(this, "a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s", false);
  public get aPPLICATIONINSIGHTS() {
    return this._aPPLICATIONINSIGHTS;
  }
  public putAPPLICATIONINSIGHTS(value: DataLogicmonitorDeviceGroupExtraServicesAPPLICATIONINSIGHTS[] | cdktf.IResolvable) {
    this._aPPLICATIONINSIGHTS.internalValue = value;
  }
  public resetAPPLICATIONINSIGHTS() {
    this._aPPLICATIONINSIGHTS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPLICATIONINSIGHTSInput() {
    return this._aPPLICATIONINSIGHTS.internalValue;
  }

  // a_p_p_s_e_r_v_i_c_e - computed: false, optional: true, required: false
  private _aPPSERVICE = new DataLogicmonitorDeviceGroupExtraServicesAPPSERVICEList(this, "a_p_p_s_e_r_v_i_c_e", false);
  public get aPPSERVICE() {
    return this._aPPSERVICE;
  }
  public putAPPSERVICE(value: DataLogicmonitorDeviceGroupExtraServicesAPPSERVICE[] | cdktf.IResolvable) {
    this._aPPSERVICE.internalValue = value;
  }
  public resetAPPSERVICE() {
    this._aPPSERVICE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPSERVICEInput() {
    return this._aPPSERVICE.internalValue;
  }

  // a_p_p_s_e_r_v_i_c_e_p_l_a_n - computed: false, optional: true, required: false
  private _aPPSERVICEPLAN = new DataLogicmonitorDeviceGroupExtraServicesAPPSERVICEPLANList(this, "a_p_p_s_e_r_v_i_c_e_p_l_a_n", false);
  public get aPPSERVICEPLAN() {
    return this._aPPSERVICEPLAN;
  }
  public putAPPSERVICEPLAN(value: DataLogicmonitorDeviceGroupExtraServicesAPPSERVICEPLAN[] | cdktf.IResolvable) {
    this._aPPSERVICEPLAN.internalValue = value;
  }
  public resetAPPSERVICEPLAN() {
    this._aPPSERVICEPLAN.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPSERVICEPLANInput() {
    return this._aPPSERVICEPLAN.internalValue;
  }

  // a_p_p_s_t_r_e_a_m - computed: false, optional: true, required: false
  private _aPPSTREAM = new DataLogicmonitorDeviceGroupExtraServicesAPPSTREAMList(this, "a_p_p_s_t_r_e_a_m", false);
  public get aPPSTREAM() {
    return this._aPPSTREAM;
  }
  public putAPPSTREAM(value: DataLogicmonitorDeviceGroupExtraServicesAPPSTREAM[] | cdktf.IResolvable) {
    this._aPPSTREAM.internalValue = value;
  }
  public resetAPPSTREAM() {
    this._aPPSTREAM.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPSTREAMInput() {
    return this._aPPSTREAM.internalValue;
  }

  // a_t_h_e_n_a - computed: false, optional: true, required: false
  private _aTHENA = new DataLogicmonitorDeviceGroupExtraServicesATHENAList(this, "a_t_h_e_n_a", false);
  public get aTHENA() {
    return this._aTHENA;
  }
  public putATHENA(value: DataLogicmonitorDeviceGroupExtraServicesATHENA[] | cdktf.IResolvable) {
    this._aTHENA.internalValue = value;
  }
  public resetATHENA() {
    this._aTHENA.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aTHENAInput() {
    return this._aTHENA.internalValue;
  }

  // a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t - computed: false, optional: true, required: false
  private _aUTOMATIONACCOUNT = new DataLogicmonitorDeviceGroupExtraServicesAUTOMATIONACCOUNTList(this, "a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t", false);
  public get aUTOMATIONACCOUNT() {
    return this._aUTOMATIONACCOUNT;
  }
  public putAUTOMATIONACCOUNT(value: DataLogicmonitorDeviceGroupExtraServicesAUTOMATIONACCOUNT[] | cdktf.IResolvable) {
    this._aUTOMATIONACCOUNT.internalValue = value;
  }
  public resetAUTOMATIONACCOUNT() {
    this._aUTOMATIONACCOUNT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aUTOMATIONACCOUNTInput() {
    return this._aUTOMATIONACCOUNT.internalValue;
  }

  // a_u_t_o_s_c_a_l_i_n_g - computed: false, optional: true, required: false
  private _aUTOSCALING = new DataLogicmonitorDeviceGroupExtraServicesAUTOSCALINGList(this, "a_u_t_o_s_c_a_l_i_n_g", false);
  public get aUTOSCALING() {
    return this._aUTOSCALING;
  }
  public putAUTOSCALING(value: DataLogicmonitorDeviceGroupExtraServicesAUTOSCALING[] | cdktf.IResolvable) {
    this._aUTOSCALING.internalValue = value;
  }
  public resetAUTOSCALING() {
    this._aUTOSCALING.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aUTOSCALINGInput() {
    return this._aUTOSCALING.internalValue;
  }

  // api_g_a_t_e_w_a_y - computed: false, optional: true, required: false
  private _apiGATEWAY = new DataLogicmonitorDeviceGroupExtraServicesApiGATEWAYList(this, "api_g_a_t_e_w_a_y", false);
  public get apiGATEWAY() {
    return this._apiGATEWAY;
  }
  public putApiGATEWAY(value: DataLogicmonitorDeviceGroupExtraServicesApiGATEWAY[] | cdktf.IResolvable) {
    this._apiGATEWAY.internalValue = value;
  }
  public resetApiGATEWAY() {
    this._apiGATEWAY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGATEWAYInput() {
    return this._apiGATEWAY.internalValue;
  }

  // api_m_a_n_a_g_e_m_e_n_t - computed: false, optional: true, required: false
  private _apiMANAGEMENT = new DataLogicmonitorDeviceGroupExtraServicesApiMANAGEMENTList(this, "api_m_a_n_a_g_e_m_e_n_t", false);
  public get apiMANAGEMENT() {
    return this._apiMANAGEMENT;
  }
  public putApiMANAGEMENT(value: DataLogicmonitorDeviceGroupExtraServicesApiMANAGEMENT[] | cdktf.IResolvable) {
    this._apiMANAGEMENT.internalValue = value;
  }
  public resetApiMANAGEMENT() {
    this._apiMANAGEMENT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiMANAGEMENTInput() {
    return this._apiMANAGEMENT.internalValue;
  }

  // b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s - computed: false, optional: true, required: false
  private _bACKUPPROTECTEDITEMS = new DataLogicmonitorDeviceGroupExtraServicesBACKUPPROTECTEDITEMSList(this, "b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s", false);
  public get bACKUPPROTECTEDITEMS() {
    return this._bACKUPPROTECTEDITEMS;
  }
  public putBACKUPPROTECTEDITEMS(value: DataLogicmonitorDeviceGroupExtraServicesBACKUPPROTECTEDITEMS[] | cdktf.IResolvable) {
    this._bACKUPPROTECTEDITEMS.internalValue = value;
  }
  public resetBACKUPPROTECTEDITEMS() {
    this._bACKUPPROTECTEDITEMS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bACKUPPROTECTEDITEMSInput() {
    return this._bACKUPPROTECTEDITEMS.internalValue;
  }

  // b_l_o_b_s_t_o_r_a_g_e - computed: false, optional: true, required: false
  private _bLOBSTORAGE = new DataLogicmonitorDeviceGroupExtraServicesBLOBSTORAGEList(this, "b_l_o_b_s_t_o_r_a_g_e", false);
  public get bLOBSTORAGE() {
    return this._bLOBSTORAGE;
  }
  public putBLOBSTORAGE(value: DataLogicmonitorDeviceGroupExtraServicesBLOBSTORAGE[] | cdktf.IResolvable) {
    this._bLOBSTORAGE.internalValue = value;
  }
  public resetBLOBSTORAGE() {
    this._bLOBSTORAGE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bLOBSTORAGEInput() {
    return this._bLOBSTORAGE.internalValue;
  }

  // c_l_o_u_d_f_r_o_n_t - computed: false, optional: true, required: false
  private _cLOUDFRONT = new DataLogicmonitorDeviceGroupExtraServicesCLOUDFRONTList(this, "c_l_o_u_d_f_r_o_n_t", false);
  public get cLOUDFRONT() {
    return this._cLOUDFRONT;
  }
  public putCLOUDFRONT(value: DataLogicmonitorDeviceGroupExtraServicesCLOUDFRONT[] | cdktf.IResolvable) {
    this._cLOUDFRONT.internalValue = value;
  }
  public resetCLOUDFRONT() {
    this._cLOUDFRONT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cLOUDFRONTInput() {
    return this._cLOUDFRONT.internalValue;
  }

  // c_l_o_u_d_s_e_a_r_c_h - computed: false, optional: true, required: false
  private _cLOUDSEARCH = new DataLogicmonitorDeviceGroupExtraServicesCLOUDSEARCHList(this, "c_l_o_u_d_s_e_a_r_c_h", false);
  public get cLOUDSEARCH() {
    return this._cLOUDSEARCH;
  }
  public putCLOUDSEARCH(value: DataLogicmonitorDeviceGroupExtraServicesCLOUDSEARCH[] | cdktf.IResolvable) {
    this._cLOUDSEARCH.internalValue = value;
  }
  public resetCLOUDSEARCH() {
    this._cLOUDSEARCH.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cLOUDSEARCHInput() {
    return this._cLOUDSEARCH.internalValue;
  }

  // c_o_d_e_b_ui_l_d - computed: false, optional: true, required: false
  private _cODEBUiLD = new DataLogicmonitorDeviceGroupExtraServicesCODEBUiLDList(this, "c_o_d_e_b_ui_l_d", false);
  public get cODEBUiLD() {
    return this._cODEBUiLD;
  }
  public putCODEBUiLD(value: DataLogicmonitorDeviceGroupExtraServicesCODEBUiLD[] | cdktf.IResolvable) {
    this._cODEBUiLD.internalValue = value;
  }
  public resetCODEBUiLD() {
    this._cODEBUiLD.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cODEBUiLDInput() {
    return this._cODEBUiLD.internalValue;
  }

  // c_o_g_n_i_t_i_v_e_s_e_a_r_c_h - computed: false, optional: true, required: false
  private _cOGNITIVESEARCH = new DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESEARCHList(this, "c_o_g_n_i_t_i_v_e_s_e_a_r_c_h", false);
  public get cOGNITIVESEARCH() {
    return this._cOGNITIVESEARCH;
  }
  public putCOGNITIVESEARCH(value: DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESEARCH[] | cdktf.IResolvable) {
    this._cOGNITIVESEARCH.internalValue = value;
  }
  public resetCOGNITIVESEARCH() {
    this._cOGNITIVESEARCH.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cOGNITIVESEARCHInput() {
    return this._cOGNITIVESEARCH.internalValue;
  }

  // c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s - computed: false, optional: true, required: false
  private _cOGNITIVESERVICES = new DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESERVICESList(this, "c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s", false);
  public get cOGNITIVESERVICES() {
    return this._cOGNITIVESERVICES;
  }
  public putCOGNITIVESERVICES(value: DataLogicmonitorDeviceGroupExtraServicesCOGNITIVESERVICES[] | cdktf.IResolvable) {
    this._cOGNITIVESERVICES.internalValue = value;
  }
  public resetCOGNITIVESERVICES() {
    this._cOGNITIVESERVICES.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cOGNITIVESERVICESInput() {
    return this._cOGNITIVESERVICES.internalValue;
  }

  // c_o_g_n_i_t_o - computed: false, optional: true, required: false
  private _cOGNITO = new DataLogicmonitorDeviceGroupExtraServicesCOGNITOList(this, "c_o_g_n_i_t_o", false);
  public get cOGNITO() {
    return this._cOGNITO;
  }
  public putCOGNITO(value: DataLogicmonitorDeviceGroupExtraServicesCOGNITO[] | cdktf.IResolvable) {
    this._cOGNITO.internalValue = value;
  }
  public resetCOGNITO() {
    this._cOGNITO.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cOGNITOInput() {
    return this._cOGNITO.internalValue;
  }

  // c_o_s_m_o_s_d_b - computed: false, optional: true, required: false
  private _cOSMOSDB = new DataLogicmonitorDeviceGroupExtraServicesCOSMOSDBList(this, "c_o_s_m_o_s_d_b", false);
  public get cOSMOSDB() {
    return this._cOSMOSDB;
  }
  public putCOSMOSDB(value: DataLogicmonitorDeviceGroupExtraServicesCOSMOSDB[] | cdktf.IResolvable) {
    this._cOSMOSDB.internalValue = value;
  }
  public resetCOSMOSDB() {
    this._cOSMOSDB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cOSMOSDBInput() {
    return this._cOSMOSDB.internalValue;
  }

  // d_a_t_a_f_a_c_t_o_r_y - computed: false, optional: true, required: false
  private _dATAFACTORY = new DataLogicmonitorDeviceGroupExtraServicesDATAFACTORYList(this, "d_a_t_a_f_a_c_t_o_r_y", false);
  public get dATAFACTORY() {
    return this._dATAFACTORY;
  }
  public putDATAFACTORY(value: DataLogicmonitorDeviceGroupExtraServicesDATAFACTORY[] | cdktf.IResolvable) {
    this._dATAFACTORY.internalValue = value;
  }
  public resetDATAFACTORY() {
    this._dATAFACTORY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dATAFACTORYInput() {
    return this._dATAFACTORY.internalValue;
  }

  // d_i_r_e_c_t_c_o_n_n_e_c_t - computed: false, optional: true, required: false
  private _dIRECTCONNECT = new DataLogicmonitorDeviceGroupExtraServicesDIRECTCONNECTList(this, "d_i_r_e_c_t_c_o_n_n_e_c_t", false);
  public get dIRECTCONNECT() {
    return this._dIRECTCONNECT;
  }
  public putDIRECTCONNECT(value: DataLogicmonitorDeviceGroupExtraServicesDIRECTCONNECT[] | cdktf.IResolvable) {
    this._dIRECTCONNECT.internalValue = value;
  }
  public resetDIRECTCONNECT() {
    this._dIRECTCONNECT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dIRECTCONNECTInput() {
    return this._dIRECTCONNECT.internalValue;
  }

  // d_m_s_r_e_p_l_i_c_a_t_i_o_n - computed: false, optional: true, required: false
  private _dMSREPLICATION = new DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONList(this, "d_m_s_r_e_p_l_i_c_a_t_i_o_n", false);
  public get dMSREPLICATION() {
    return this._dMSREPLICATION;
  }
  public putDMSREPLICATION(value: DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATION[] | cdktf.IResolvable) {
    this._dMSREPLICATION.internalValue = value;
  }
  public resetDMSREPLICATION() {
    this._dMSREPLICATION.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dMSREPLICATIONInput() {
    return this._dMSREPLICATION.internalValue;
  }

  // d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s - computed: false, optional: true, required: false
  private _dMSREPLICATIONTASKS = new DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONTASKSList(this, "d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s", false);
  public get dMSREPLICATIONTASKS() {
    return this._dMSREPLICATIONTASKS;
  }
  public putDMSREPLICATIONTASKS(value: DataLogicmonitorDeviceGroupExtraServicesDMSREPLICATIONTASKS[] | cdktf.IResolvable) {
    this._dMSREPLICATIONTASKS.internalValue = value;
  }
  public resetDMSREPLICATIONTASKS() {
    this._dMSREPLICATIONTASKS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dMSREPLICATIONTASKSInput() {
    return this._dMSREPLICATIONTASKS.internalValue;
  }

  // d_o_c_d_b - computed: false, optional: true, required: false
  private _dOCDB = new DataLogicmonitorDeviceGroupExtraServicesDOCDBList(this, "d_o_c_d_b", false);
  public get dOCDB() {
    return this._dOCDB;
  }
  public putDOCDB(value: DataLogicmonitorDeviceGroupExtraServicesDOCDB[] | cdktf.IResolvable) {
    this._dOCDB.internalValue = value;
  }
  public resetDOCDB() {
    this._dOCDB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dOCDBInput() {
    return this._dOCDB.internalValue;
  }

  // d_y_n_a_m_o_d_b - computed: false, optional: true, required: false
  private _dYNAMODB = new DataLogicmonitorDeviceGroupExtraServicesDYNAMODBList(this, "d_y_n_a_m_o_d_b", false);
  public get dYNAMODB() {
    return this._dYNAMODB;
  }
  public putDYNAMODB(value: DataLogicmonitorDeviceGroupExtraServicesDYNAMODB[] | cdktf.IResolvable) {
    this._dYNAMODB.internalValue = value;
  }
  public resetDYNAMODB() {
    this._dYNAMODB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dYNAMODBInput() {
    return this._dYNAMODB.internalValue;
  }

  // e_b_s - computed: false, optional: true, required: false
  private _eBS = new DataLogicmonitorDeviceGroupExtraServicesEBSList(this, "e_b_s", false);
  public get eBS() {
    return this._eBS;
  }
  public putEBS(value: DataLogicmonitorDeviceGroupExtraServicesEBS[] | cdktf.IResolvable) {
    this._eBS.internalValue = value;
  }
  public resetEBS() {
    this._eBS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eBSInput() {
    return this._eBS.internalValue;
  }

  // e_c2 - computed: false, optional: true, required: false
  private _eC2 = new DataLogicmonitorDeviceGroupExtraServicesEC2List(this, "e_c2", false);
  public get eC2() {
    return this._eC2;
  }
  public putEC2(value: DataLogicmonitorDeviceGroupExtraServicesEC2[] | cdktf.IResolvable) {
    this._eC2.internalValue = value;
  }
  public resetEC2() {
    this._eC2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eC2Input() {
    return this._eC2.internalValue;
  }

  // e_c_s - computed: false, optional: true, required: false
  private _eCS = new DataLogicmonitorDeviceGroupExtraServicesECSList(this, "e_c_s", false);
  public get eCS() {
    return this._eCS;
  }
  public putECS(value: DataLogicmonitorDeviceGroupExtraServicesECS[] | cdktf.IResolvable) {
    this._eCS.internalValue = value;
  }
  public resetECS() {
    this._eCS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eCSInput() {
    return this._eCS.internalValue;
  }

  // e_f_s - computed: false, optional: true, required: false
  private _eFS = new DataLogicmonitorDeviceGroupExtraServicesEFSList(this, "e_f_s", false);
  public get eFS() {
    return this._eFS;
  }
  public putEFS(value: DataLogicmonitorDeviceGroupExtraServicesEFS[] | cdktf.IResolvable) {
    this._eFS.internalValue = value;
  }
  public resetEFS() {
    this._eFS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eFSInput() {
    return this._eFS.internalValue;
  }

  // e_l_a_s_t_i_c_a_c_h_e - computed: false, optional: true, required: false
  private _eLASTICACHE = new DataLogicmonitorDeviceGroupExtraServicesELASTICACHEList(this, "e_l_a_s_t_i_c_a_c_h_e", false);
  public get eLASTICACHE() {
    return this._eLASTICACHE;
  }
  public putELASTICACHE(value: DataLogicmonitorDeviceGroupExtraServicesELASTICACHE[] | cdktf.IResolvable) {
    this._eLASTICACHE.internalValue = value;
  }
  public resetELASTICACHE() {
    this._eLASTICACHE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eLASTICACHEInput() {
    return this._eLASTICACHE.internalValue;
  }

  // e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k - computed: false, optional: true, required: false
  private _eLASTICBEANSTALK = new DataLogicmonitorDeviceGroupExtraServicesELASTICBEANSTALKList(this, "e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k", false);
  public get eLASTICBEANSTALK() {
    return this._eLASTICBEANSTALK;
  }
  public putELASTICBEANSTALK(value: DataLogicmonitorDeviceGroupExtraServicesELASTICBEANSTALK[] | cdktf.IResolvable) {
    this._eLASTICBEANSTALK.internalValue = value;
  }
  public resetELASTICBEANSTALK() {
    this._eLASTICBEANSTALK.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eLASTICBEANSTALKInput() {
    return this._eLASTICBEANSTALK.internalValue;
  }

  // e_l_a_s_t_i_c_s_e_a_r_c_h - computed: false, optional: true, required: false
  private _eLASTICSEARCH = new DataLogicmonitorDeviceGroupExtraServicesELASTICSEARCHList(this, "e_l_a_s_t_i_c_s_e_a_r_c_h", false);
  public get eLASTICSEARCH() {
    return this._eLASTICSEARCH;
  }
  public putELASTICSEARCH(value: DataLogicmonitorDeviceGroupExtraServicesELASTICSEARCH[] | cdktf.IResolvable) {
    this._eLASTICSEARCH.internalValue = value;
  }
  public resetELASTICSEARCH() {
    this._eLASTICSEARCH.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eLASTICSEARCHInput() {
    return this._eLASTICSEARCH.internalValue;
  }

  // e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r - computed: false, optional: true, required: false
  private _eLASTICTRANSCODER = new DataLogicmonitorDeviceGroupExtraServicesELASTICTRANSCODERList(this, "e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r", false);
  public get eLASTICTRANSCODER() {
    return this._eLASTICTRANSCODER;
  }
  public putELASTICTRANSCODER(value: DataLogicmonitorDeviceGroupExtraServicesELASTICTRANSCODER[] | cdktf.IResolvable) {
    this._eLASTICTRANSCODER.internalValue = value;
  }
  public resetELASTICTRANSCODER() {
    this._eLASTICTRANSCODER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eLASTICTRANSCODERInput() {
    return this._eLASTICTRANSCODER.internalValue;
  }

  // e_l_b - computed: false, optional: true, required: false
  private _eLB = new DataLogicmonitorDeviceGroupExtraServicesELBList(this, "e_l_b", false);
  public get eLB() {
    return this._eLB;
  }
  public putELB(value: DataLogicmonitorDeviceGroupExtraServicesELB[] | cdktf.IResolvable) {
    this._eLB.internalValue = value;
  }
  public resetELB() {
    this._eLB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eLBInput() {
    return this._eLB.internalValue;
  }

  // e_m_r - computed: false, optional: true, required: false
  private _eMR = new DataLogicmonitorDeviceGroupExtraServicesEMRList(this, "e_m_r", false);
  public get eMR() {
    return this._eMR;
  }
  public putEMR(value: DataLogicmonitorDeviceGroupExtraServicesEMR[] | cdktf.IResolvable) {
    this._eMR.internalValue = value;
  }
  public resetEMR() {
    this._eMR.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eMRInput() {
    return this._eMR.internalValue;
  }

  // e_v_e_n_t_b_r_id_g_e - computed: false, optional: true, required: false
  private _eVENTBRIdGE = new DataLogicmonitorDeviceGroupExtraServicesEVENTBRIdGEList(this, "e_v_e_n_t_b_r_id_g_e", false);
  public get eVENTBRIdGE() {
    return this._eVENTBRIdGE;
  }
  public putEVENTBRIdGE(value: DataLogicmonitorDeviceGroupExtraServicesEVENTBRIdGE[] | cdktf.IResolvable) {
    this._eVENTBRIdGE.internalValue = value;
  }
  public resetEVENTBRIdGE() {
    this._eVENTBRIdGE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eVENTBRIdGEInput() {
    return this._eVENTBRIdGE.internalValue;
  }

  // e_v_e_n_t_h_u_b - computed: false, optional: true, required: false
  private _eVENTHUB = new DataLogicmonitorDeviceGroupExtraServicesEVENTHUBList(this, "e_v_e_n_t_h_u_b", false);
  public get eVENTHUB() {
    return this._eVENTHUB;
  }
  public putEVENTHUB(value: DataLogicmonitorDeviceGroupExtraServicesEVENTHUB[] | cdktf.IResolvable) {
    this._eVENTHUB.internalValue = value;
  }
  public resetEVENTHUB() {
    this._eVENTHUB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eVENTHUBInput() {
    return this._eVENTHUB.internalValue;
  }

  // e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t - computed: false, optional: true, required: false
  private _eXPRESSROUTECIRCUiT = new DataLogicmonitorDeviceGroupExtraServicesEXPRESSROUTECIRCUiTList(this, "e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t", false);
  public get eXPRESSROUTECIRCUiT() {
    return this._eXPRESSROUTECIRCUiT;
  }
  public putEXPRESSROUTECIRCUiT(value: DataLogicmonitorDeviceGroupExtraServicesEXPRESSROUTECIRCUiT[] | cdktf.IResolvable) {
    this._eXPRESSROUTECIRCUiT.internalValue = value;
  }
  public resetEXPRESSROUTECIRCUiT() {
    this._eXPRESSROUTECIRCUiT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eXPRESSROUTECIRCUiTInput() {
    return this._eXPRESSROUTECIRCUiT.internalValue;
  }

  // f_i_l_e_s_t_o_r_a_g_e - computed: false, optional: true, required: false
  private _fILESTORAGE = new DataLogicmonitorDeviceGroupExtraServicesFILESTORAGEList(this, "f_i_l_e_s_t_o_r_a_g_e", false);
  public get fILESTORAGE() {
    return this._fILESTORAGE;
  }
  public putFILESTORAGE(value: DataLogicmonitorDeviceGroupExtraServicesFILESTORAGE[] | cdktf.IResolvable) {
    this._fILESTORAGE.internalValue = value;
  }
  public resetFILESTORAGE() {
    this._fILESTORAGE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fILESTORAGEInput() {
    return this._fILESTORAGE.internalValue;
  }

  // f_i_r_e_h_o_s_e - computed: false, optional: true, required: false
  private _fIREHOSE = new DataLogicmonitorDeviceGroupExtraServicesFIREHOSEList(this, "f_i_r_e_h_o_s_e", false);
  public get fIREHOSE() {
    return this._fIREHOSE;
  }
  public putFIREHOSE(value: DataLogicmonitorDeviceGroupExtraServicesFIREHOSE[] | cdktf.IResolvable) {
    this._fIREHOSE.internalValue = value;
  }
  public resetFIREHOSE() {
    this._fIREHOSE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fIREHOSEInput() {
    return this._fIREHOSE.internalValue;
  }

  // f_i_r_e_w_a_l_l - computed: false, optional: true, required: false
  private _fIREWALL = new DataLogicmonitorDeviceGroupExtraServicesFIREWALLList(this, "f_i_r_e_w_a_l_l", false);
  public get fIREWALL() {
    return this._fIREWALL;
  }
  public putFIREWALL(value: DataLogicmonitorDeviceGroupExtraServicesFIREWALL[] | cdktf.IResolvable) {
    this._fIREWALL.internalValue = value;
  }
  public resetFIREWALL() {
    this._fIREWALL.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fIREWALLInput() {
    return this._fIREWALL.internalValue;
  }

  // f_r_o_n_t_d_o_o_r_s - computed: false, optional: true, required: false
  private _fRONTDOORS = new DataLogicmonitorDeviceGroupExtraServicesFRONTDOORSList(this, "f_r_o_n_t_d_o_o_r_s", false);
  public get fRONTDOORS() {
    return this._fRONTDOORS;
  }
  public putFRONTDOORS(value: DataLogicmonitorDeviceGroupExtraServicesFRONTDOORS[] | cdktf.IResolvable) {
    this._fRONTDOORS.internalValue = value;
  }
  public resetFRONTDOORS() {
    this._fRONTDOORS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fRONTDOORSInput() {
    return this._fRONTDOORS.internalValue;
  }

  // f_s_x - computed: false, optional: true, required: false
  private _fSX = new DataLogicmonitorDeviceGroupExtraServicesFSXList(this, "f_s_x", false);
  public get fSX() {
    return this._fSX;
  }
  public putFSX(value: DataLogicmonitorDeviceGroupExtraServicesFSX[] | cdktf.IResolvable) {
    this._fSX.internalValue = value;
  }
  public resetFSX() {
    this._fSX.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fSXInput() {
    return this._fSX.internalValue;
  }

  // g_l_u_e - computed: false, optional: true, required: false
  private _gLUE = new DataLogicmonitorDeviceGroupExtraServicesGLUEList(this, "g_l_u_e", false);
  public get gLUE() {
    return this._gLUE;
  }
  public putGLUE(value: DataLogicmonitorDeviceGroupExtraServicesGLUE[] | cdktf.IResolvable) {
    this._gLUE.internalValue = value;
  }
  public resetGLUE() {
    this._gLUE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gLUEInput() {
    return this._gLUE.internalValue;
  }

  // k_e_y_v_a_u_l_t - computed: false, optional: true, required: false
  private _kEYVAULT = new DataLogicmonitorDeviceGroupExtraServicesKEYVAULTList(this, "k_e_y_v_a_u_l_t", false);
  public get kEYVAULT() {
    return this._kEYVAULT;
  }
  public putKEYVAULT(value: DataLogicmonitorDeviceGroupExtraServicesKEYVAULT[] | cdktf.IResolvable) {
    this._kEYVAULT.internalValue = value;
  }
  public resetKEYVAULT() {
    this._kEYVAULT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kEYVAULTInput() {
    return this._kEYVAULT.internalValue;
  }

  // k_i_n_e_s_i_s - computed: false, optional: true, required: false
  private _kINESIS = new DataLogicmonitorDeviceGroupExtraServicesKINESISList(this, "k_i_n_e_s_i_s", false);
  public get kINESIS() {
    return this._kINESIS;
  }
  public putKINESIS(value: DataLogicmonitorDeviceGroupExtraServicesKINESIS[] | cdktf.IResolvable) {
    this._kINESIS.internalValue = value;
  }
  public resetKINESIS() {
    this._kINESIS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kINESISInput() {
    return this._kINESIS.internalValue;
  }

  // k_i_n_e_s_i_s_v_id_e_o - computed: false, optional: true, required: false
  private _kINESISVIdEO = new DataLogicmonitorDeviceGroupExtraServicesKINESISVIdEOList(this, "k_i_n_e_s_i_s_v_id_e_o", false);
  public get kINESISVIdEO() {
    return this._kINESISVIdEO;
  }
  public putKINESISVIdEO(value: DataLogicmonitorDeviceGroupExtraServicesKINESISVIdEO[] | cdktf.IResolvable) {
    this._kINESISVIdEO.internalValue = value;
  }
  public resetKINESISVIdEO() {
    this._kINESISVIdEO.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kINESISVIdEOInput() {
    return this._kINESISVIdEO.internalValue;
  }

  // l_a_m_b_d_a - computed: false, optional: true, required: false
  private _lAMBDA = new DataLogicmonitorDeviceGroupExtraServicesLAMBDAList(this, "l_a_m_b_d_a", false);
  public get lAMBDA() {
    return this._lAMBDA;
  }
  public putLAMBDA(value: DataLogicmonitorDeviceGroupExtraServicesLAMBDA[] | cdktf.IResolvable) {
    this._lAMBDA.internalValue = value;
  }
  public resetLAMBDA() {
    this._lAMBDA.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lAMBDAInput() {
    return this._lAMBDA.internalValue;
  }

  // l_o_a_d_b_a_l_a_n_c_e_r_s - computed: false, optional: true, required: false
  private _lOADBALANCERS = new DataLogicmonitorDeviceGroupExtraServicesLOADBALANCERSList(this, "l_o_a_d_b_a_l_a_n_c_e_r_s", false);
  public get lOADBALANCERS() {
    return this._lOADBALANCERS;
  }
  public putLOADBALANCERS(value: DataLogicmonitorDeviceGroupExtraServicesLOADBALANCERS[] | cdktf.IResolvable) {
    this._lOADBALANCERS.internalValue = value;
  }
  public resetLOADBALANCERS() {
    this._lOADBALANCERS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lOADBALANCERSInput() {
    return this._lOADBALANCERS.internalValue;
  }

  // l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s - computed: false, optional: true, required: false
  private _lOGANALYTICSWORKSPACES = new DataLogicmonitorDeviceGroupExtraServicesLOGANALYTICSWORKSPACESList(this, "l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s", false);
  public get lOGANALYTICSWORKSPACES() {
    return this._lOGANALYTICSWORKSPACES;
  }
  public putLOGANALYTICSWORKSPACES(value: DataLogicmonitorDeviceGroupExtraServicesLOGANALYTICSWORKSPACES[] | cdktf.IResolvable) {
    this._lOGANALYTICSWORKSPACES.internalValue = value;
  }
  public resetLOGANALYTICSWORKSPACES() {
    this._lOGANALYTICSWORKSPACES.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lOGANALYTICSWORKSPACESInput() {
    return this._lOGANALYTICSWORKSPACES.internalValue;
  }

  // l_o_g_i_c_a_p_p_s - computed: false, optional: true, required: false
  private _lOGICAPPS = new DataLogicmonitorDeviceGroupExtraServicesLOGICAPPSList(this, "l_o_g_i_c_a_p_p_s", false);
  public get lOGICAPPS() {
    return this._lOGICAPPS;
  }
  public putLOGICAPPS(value: DataLogicmonitorDeviceGroupExtraServicesLOGICAPPS[] | cdktf.IResolvable) {
    this._lOGICAPPS.internalValue = value;
  }
  public resetLOGICAPPS() {
    this._lOGICAPPS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lOGICAPPSInput() {
    return this._lOGICAPPS.internalValue;
  }

  // m_e_d_i_a_c_o_n_n_e_c_t - computed: false, optional: true, required: false
  private _mEDIACONNECT = new DataLogicmonitorDeviceGroupExtraServicesMEDIACONNECTList(this, "m_e_d_i_a_c_o_n_n_e_c_t", false);
  public get mEDIACONNECT() {
    return this._mEDIACONNECT;
  }
  public putMEDIACONNECT(value: DataLogicmonitorDeviceGroupExtraServicesMEDIACONNECT[] | cdktf.IResolvable) {
    this._mEDIACONNECT.internalValue = value;
  }
  public resetMEDIACONNECT() {
    this._mEDIACONNECT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIACONNECTInput() {
    return this._mEDIACONNECT.internalValue;
  }

  // m_e_d_i_a_c_o_n_v_e_r_t - computed: false, optional: true, required: false
  private _mEDIACONVERT = new DataLogicmonitorDeviceGroupExtraServicesMEDIACONVERTList(this, "m_e_d_i_a_c_o_n_v_e_r_t", false);
  public get mEDIACONVERT() {
    return this._mEDIACONVERT;
  }
  public putMEDIACONVERT(value: DataLogicmonitorDeviceGroupExtraServicesMEDIACONVERT[] | cdktf.IResolvable) {
    this._mEDIACONVERT.internalValue = value;
  }
  public resetMEDIACONVERT() {
    this._mEDIACONVERT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIACONVERTInput() {
    return this._mEDIACONVERT.internalValue;
  }

  // m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e - computed: false, optional: true, required: false
  private _mEDIAPACKAGELIVE = new DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGELIVEList(this, "m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e", false);
  public get mEDIAPACKAGELIVE() {
    return this._mEDIAPACKAGELIVE;
  }
  public putMEDIAPACKAGELIVE(value: DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGELIVE[] | cdktf.IResolvable) {
    this._mEDIAPACKAGELIVE.internalValue = value;
  }
  public resetMEDIAPACKAGELIVE() {
    this._mEDIAPACKAGELIVE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIAPACKAGELIVEInput() {
    return this._mEDIAPACKAGELIVE.internalValue;
  }

  // m_e_d_i_a_p_a_c_k_a_g_e_v_o_d - computed: false, optional: true, required: false
  private _mEDIAPACKAGEVOD = new DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGEVODList(this, "m_e_d_i_a_p_a_c_k_a_g_e_v_o_d", false);
  public get mEDIAPACKAGEVOD() {
    return this._mEDIAPACKAGEVOD;
  }
  public putMEDIAPACKAGEVOD(value: DataLogicmonitorDeviceGroupExtraServicesMEDIAPACKAGEVOD[] | cdktf.IResolvable) {
    this._mEDIAPACKAGEVOD.internalValue = value;
  }
  public resetMEDIAPACKAGEVOD() {
    this._mEDIAPACKAGEVOD.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIAPACKAGEVODInput() {
    return this._mEDIAPACKAGEVOD.internalValue;
  }

  // m_e_d_i_a_s_t_o_r_e - computed: false, optional: true, required: false
  private _mEDIASTORE = new DataLogicmonitorDeviceGroupExtraServicesMEDIASTOREList(this, "m_e_d_i_a_s_t_o_r_e", false);
  public get mEDIASTORE() {
    return this._mEDIASTORE;
  }
  public putMEDIASTORE(value: DataLogicmonitorDeviceGroupExtraServicesMEDIASTORE[] | cdktf.IResolvable) {
    this._mEDIASTORE.internalValue = value;
  }
  public resetMEDIASTORE() {
    this._mEDIASTORE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIASTOREInput() {
    return this._mEDIASTORE.internalValue;
  }

  // m_e_d_i_a_t_a_i_l_o_r - computed: false, optional: true, required: false
  private _mEDIATAILOR = new DataLogicmonitorDeviceGroupExtraServicesMEDIATAILORList(this, "m_e_d_i_a_t_a_i_l_o_r", false);
  public get mEDIATAILOR() {
    return this._mEDIATAILOR;
  }
  public putMEDIATAILOR(value: DataLogicmonitorDeviceGroupExtraServicesMEDIATAILOR[] | cdktf.IResolvable) {
    this._mEDIATAILOR.internalValue = value;
  }
  public resetMEDIATAILOR() {
    this._mEDIATAILOR.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIATAILORInput() {
    return this._mEDIATAILOR.internalValue;
  }

  // m_q - computed: false, optional: true, required: false
  private _mQ = new DataLogicmonitorDeviceGroupExtraServicesMQList(this, "m_q", false);
  public get mQ() {
    return this._mQ;
  }
  public putMQ(value: DataLogicmonitorDeviceGroupExtraServicesMQ[] | cdktf.IResolvable) {
    this._mQ.internalValue = value;
  }
  public resetMQ() {
    this._mQ.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mQInput() {
    return this._mQ.internalValue;
  }

  // m_s_k_b_r_o_k_e_r - computed: false, optional: true, required: false
  private _mSKBROKER = new DataLogicmonitorDeviceGroupExtraServicesMSKBROKERList(this, "m_s_k_b_r_o_k_e_r", false);
  public get mSKBROKER() {
    return this._mSKBROKER;
  }
  public putMSKBROKER(value: DataLogicmonitorDeviceGroupExtraServicesMSKBROKER[] | cdktf.IResolvable) {
    this._mSKBROKER.internalValue = value;
  }
  public resetMSKBROKER() {
    this._mSKBROKER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mSKBROKERInput() {
    return this._mSKBROKER.internalValue;
  }

  // m_s_k_c_l_u_s_t_e_r - computed: false, optional: true, required: false
  private _mSKCLUSTER = new DataLogicmonitorDeviceGroupExtraServicesMSKCLUSTERList(this, "m_s_k_c_l_u_s_t_e_r", false);
  public get mSKCLUSTER() {
    return this._mSKCLUSTER;
  }
  public putMSKCLUSTER(value: DataLogicmonitorDeviceGroupExtraServicesMSKCLUSTER[] | cdktf.IResolvable) {
    this._mSKCLUSTER.internalValue = value;
  }
  public resetMSKCLUSTER() {
    this._mSKCLUSTER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mSKCLUSTERInput() {
    return this._mSKCLUSTER.internalValue;
  }

  // m_y_sql - computed: false, optional: true, required: false
  private _mYSql = new DataLogicmonitorDeviceGroupExtraServicesMYSqlList(this, "m_y_sql", false);
  public get mYSql() {
    return this._mYSql;
  }
  public putMYSql(value: DataLogicmonitorDeviceGroupExtraServicesMYSql[] | cdktf.IResolvable) {
    this._mYSql.internalValue = value;
  }
  public resetMYSql() {
    this._mYSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mYSqlInput() {
    return this._mYSql.internalValue;
  }

  // n_a_t_g_a_t_e_w_a_y - computed: false, optional: true, required: false
  private _nATGATEWAY = new DataLogicmonitorDeviceGroupExtraServicesNATGATEWAYList(this, "n_a_t_g_a_t_e_w_a_y", false);
  public get nATGATEWAY() {
    return this._nATGATEWAY;
  }
  public putNATGATEWAY(value: DataLogicmonitorDeviceGroupExtraServicesNATGATEWAY[] | cdktf.IResolvable) {
    this._nATGATEWAY.internalValue = value;
  }
  public resetNATGATEWAY() {
    this._nATGATEWAY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nATGATEWAYInput() {
    return this._nATGATEWAY.internalValue;
  }

  // n_e_t_w_o_r_k_e_l_b - computed: false, optional: true, required: false
  private _nETWORKELB = new DataLogicmonitorDeviceGroupExtraServicesNETWORKELBList(this, "n_e_t_w_o_r_k_e_l_b", false);
  public get nETWORKELB() {
    return this._nETWORKELB;
  }
  public putNETWORKELB(value: DataLogicmonitorDeviceGroupExtraServicesNETWORKELB[] | cdktf.IResolvable) {
    this._nETWORKELB.internalValue = value;
  }
  public resetNETWORKELB() {
    this._nETWORKELB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nETWORKELBInput() {
    return this._nETWORKELB.internalValue;
  }

  // n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e - computed: false, optional: true, required: false
  private _nETWORKINTERFACE = new DataLogicmonitorDeviceGroupExtraServicesNETWORKINTERFACEList(this, "n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e", false);
  public get nETWORKINTERFACE() {
    return this._nETWORKINTERFACE;
  }
  public putNETWORKINTERFACE(value: DataLogicmonitorDeviceGroupExtraServicesNETWORKINTERFACE[] | cdktf.IResolvable) {
    this._nETWORKINTERFACE.internalValue = value;
  }
  public resetNETWORKINTERFACE() {
    this._nETWORKINTERFACE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nETWORKINTERFACEInput() {
    return this._nETWORKINTERFACE.internalValue;
  }

  // o_p_s_w_o_r_k_s - computed: false, optional: true, required: false
  private _oPSWORKS = new DataLogicmonitorDeviceGroupExtraServicesOPSWORKSList(this, "o_p_s_w_o_r_k_s", false);
  public get oPSWORKS() {
    return this._oPSWORKS;
  }
  public putOPSWORKS(value: DataLogicmonitorDeviceGroupExtraServicesOPSWORKS[] | cdktf.IResolvable) {
    this._oPSWORKS.internalValue = value;
  }
  public resetOPSWORKS() {
    this._oPSWORKS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oPSWORKSInput() {
    return this._oPSWORKS.internalValue;
  }

  // p_o_s_t_g_r_e_sql - computed: false, optional: true, required: false
  private _pOSTGRESql = new DataLogicmonitorDeviceGroupExtraServicesPOSTGRESqlList(this, "p_o_s_t_g_r_e_sql", false);
  public get pOSTGRESql() {
    return this._pOSTGRESql;
  }
  public putPOSTGRESql(value: DataLogicmonitorDeviceGroupExtraServicesPOSTGRESql[] | cdktf.IResolvable) {
    this._pOSTGRESql.internalValue = value;
  }
  public resetPOSTGRESql() {
    this._pOSTGRESql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pOSTGRESqlInput() {
    return this._pOSTGRESql.internalValue;
  }

  // p_u_b_l_i_c_ip - computed: false, optional: true, required: false
  private _pUBLICIp = new DataLogicmonitorDeviceGroupExtraServicesPUBLICIpList(this, "p_u_b_l_i_c_ip", false);
  public get pUBLICIp() {
    return this._pUBLICIp;
  }
  public putPUBLICIp(value: DataLogicmonitorDeviceGroupExtraServicesPUBLICIp[] | cdktf.IResolvable) {
    this._pUBLICIp.internalValue = value;
  }
  public resetPUBLICIp() {
    this._pUBLICIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pUBLICIpInput() {
    return this._pUBLICIp.internalValue;
  }

  // q_u_e_u_e_s_t_o_r_a_g_e - computed: false, optional: true, required: false
  private _qUEUESTORAGE = new DataLogicmonitorDeviceGroupExtraServicesQUEUESTORAGEList(this, "q_u_e_u_e_s_t_o_r_a_g_e", false);
  public get qUEUESTORAGE() {
    return this._qUEUESTORAGE;
  }
  public putQUEUESTORAGE(value: DataLogicmonitorDeviceGroupExtraServicesQUEUESTORAGE[] | cdktf.IResolvable) {
    this._qUEUESTORAGE.internalValue = value;
  }
  public resetQUEUESTORAGE() {
    this._qUEUESTORAGE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qUEUESTORAGEInput() {
    return this._qUEUESTORAGE.internalValue;
  }

  // r_d_s - computed: false, optional: true, required: false
  private _rDS = new DataLogicmonitorDeviceGroupExtraServicesRDSList(this, "r_d_s", false);
  public get rDS() {
    return this._rDS;
  }
  public putRDS(value: DataLogicmonitorDeviceGroupExtraServicesRDS[] | cdktf.IResolvable) {
    this._rDS.internalValue = value;
  }
  public resetRDS() {
    this._rDS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rDSInput() {
    return this._rDS.internalValue;
  }

  // r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m - computed: false, optional: true, required: false
  private _rECOVERYPROTECTEDITEM = new DataLogicmonitorDeviceGroupExtraServicesRECOVERYPROTECTEDITEMList(this, "r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m", false);
  public get rECOVERYPROTECTEDITEM() {
    return this._rECOVERYPROTECTEDITEM;
  }
  public putRECOVERYPROTECTEDITEM(value: DataLogicmonitorDeviceGroupExtraServicesRECOVERYPROTECTEDITEM[] | cdktf.IResolvable) {
    this._rECOVERYPROTECTEDITEM.internalValue = value;
  }
  public resetRECOVERYPROTECTEDITEM() {
    this._rECOVERYPROTECTEDITEM.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rECOVERYPROTECTEDITEMInput() {
    return this._rECOVERYPROTECTEDITEM.internalValue;
  }

  // r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s - computed: false, optional: true, required: false
  private _rECOVERYSERVICES = new DataLogicmonitorDeviceGroupExtraServicesRECOVERYSERVICESList(this, "r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s", false);
  public get rECOVERYSERVICES() {
    return this._rECOVERYSERVICES;
  }
  public putRECOVERYSERVICES(value: DataLogicmonitorDeviceGroupExtraServicesRECOVERYSERVICES[] | cdktf.IResolvable) {
    this._rECOVERYSERVICES.internalValue = value;
  }
  public resetRECOVERYSERVICES() {
    this._rECOVERYSERVICES.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rECOVERYSERVICESInput() {
    return this._rECOVERYSERVICES.internalValue;
  }

  // r_e_d_i_s_c_a_c_h_e - computed: false, optional: true, required: false
  private _rEDISCACHE = new DataLogicmonitorDeviceGroupExtraServicesREDISCACHEList(this, "r_e_d_i_s_c_a_c_h_e", false);
  public get rEDISCACHE() {
    return this._rEDISCACHE;
  }
  public putREDISCACHE(value: DataLogicmonitorDeviceGroupExtraServicesREDISCACHE[] | cdktf.IResolvable) {
    this._rEDISCACHE.internalValue = value;
  }
  public resetREDISCACHE() {
    this._rEDISCACHE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rEDISCACHEInput() {
    return this._rEDISCACHE.internalValue;
  }

  // r_e_d_s_h_i_f_t - computed: false, optional: true, required: false
  private _rEDSHIFT = new DataLogicmonitorDeviceGroupExtraServicesREDSHIFTList(this, "r_e_d_s_h_i_f_t", false);
  public get rEDSHIFT() {
    return this._rEDSHIFT;
  }
  public putREDSHIFT(value: DataLogicmonitorDeviceGroupExtraServicesREDSHIFT[] | cdktf.IResolvable) {
    this._rEDSHIFT.internalValue = value;
  }
  public resetREDSHIFT() {
    this._rEDSHIFT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rEDSHIFTInput() {
    return this._rEDSHIFT.internalValue;
  }

  // r_o_u_t_e53 - computed: false, optional: true, required: false
  private _rOUTE53 = new DataLogicmonitorDeviceGroupExtraServicesROUTE53List(this, "r_o_u_t_e53", false);
  public get rOUTE53() {
    return this._rOUTE53;
  }
  public putROUTE53(value: DataLogicmonitorDeviceGroupExtraServicesROUTE53[] | cdktf.IResolvable) {
    this._rOUTE53.internalValue = value;
  }
  public resetROUTE53() {
    this._rOUTE53.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rOUTE53Input() {
    return this._rOUTE53.internalValue;
  }

  // r_o_u_t_e53_r_e_s_o_l_v_e_r - computed: false, optional: true, required: false
  private _rOUTE53RESOLVER = new DataLogicmonitorDeviceGroupExtraServicesROUTE53RESOLVERList(this, "r_o_u_t_e53_r_e_s_o_l_v_e_r", false);
  public get rOUTE53RESOLVER() {
    return this._rOUTE53RESOLVER;
  }
  public putROUTE53RESOLVER(value: DataLogicmonitorDeviceGroupExtraServicesROUTE53RESOLVER[] | cdktf.IResolvable) {
    this._rOUTE53RESOLVER.internalValue = value;
  }
  public resetROUTE53RESOLVER() {
    this._rOUTE53RESOLVER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rOUTE53RESOLVERInput() {
    return this._rOUTE53RESOLVER.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataLogicmonitorDeviceGroupExtraServicesS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataLogicmonitorDeviceGroupExtraServicesS3[] | cdktf.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // s_a_g_e_m_a_k_e_r - computed: false, optional: true, required: false
  private _sAGEMAKER = new DataLogicmonitorDeviceGroupExtraServicesSAGEMAKERList(this, "s_a_g_e_m_a_k_e_r", false);
  public get sAGEMAKER() {
    return this._sAGEMAKER;
  }
  public putSAGEMAKER(value: DataLogicmonitorDeviceGroupExtraServicesSAGEMAKER[] | cdktf.IResolvable) {
    this._sAGEMAKER.internalValue = value;
  }
  public resetSAGEMAKER() {
    this._sAGEMAKER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sAGEMAKERInput() {
    return this._sAGEMAKER.internalValue;
  }

  // s_e_r_v_i_c_e_b_u_s - computed: false, optional: true, required: false
  private _sERVICEBUS = new DataLogicmonitorDeviceGroupExtraServicesSERVICEBUSList(this, "s_e_r_v_i_c_e_b_u_s", false);
  public get sERVICEBUS() {
    return this._sERVICEBUS;
  }
  public putSERVICEBUS(value: DataLogicmonitorDeviceGroupExtraServicesSERVICEBUS[] | cdktf.IResolvable) {
    this._sERVICEBUS.internalValue = value;
  }
  public resetSERVICEBUS() {
    this._sERVICEBUS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sERVICEBUSInput() {
    return this._sERVICEBUS.internalValue;
  }

  // s_e_s - computed: false, optional: true, required: false
  private _sES = new DataLogicmonitorDeviceGroupExtraServicesSESList(this, "s_e_s", false);
  public get sES() {
    return this._sES;
  }
  public putSES(value: DataLogicmonitorDeviceGroupExtraServicesSES[] | cdktf.IResolvable) {
    this._sES.internalValue = value;
  }
  public resetSES() {
    this._sES.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sESInput() {
    return this._sES.internalValue;
  }

  // s_n_s - computed: false, optional: true, required: false
  private _sNS = new DataLogicmonitorDeviceGroupExtraServicesSNSList(this, "s_n_s", false);
  public get sNS() {
    return this._sNS;
  }
  public putSNS(value: DataLogicmonitorDeviceGroupExtraServicesSNS[] | cdktf.IResolvable) {
    this._sNS.internalValue = value;
  }
  public resetSNS() {
    this._sNS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sNSInput() {
    return this._sNS.internalValue;
  }

  // s_q_s - computed: false, optional: true, required: false
  private _sQS = new DataLogicmonitorDeviceGroupExtraServicesSQSList(this, "s_q_s", false);
  public get sQS() {
    return this._sQS;
  }
  public putSQS(value: DataLogicmonitorDeviceGroupExtraServicesSQS[] | cdktf.IResolvable) {
    this._sQS.internalValue = value;
  }
  public resetSQS() {
    this._sQS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sQSInput() {
    return this._sQS.internalValue;
  }

  // s_t_e_p_f_u_n_c_t_i_o_n_s - computed: false, optional: true, required: false
  private _sTEPFUNCTIONS = new DataLogicmonitorDeviceGroupExtraServicesSTEPFUNCTIONSList(this, "s_t_e_p_f_u_n_c_t_i_o_n_s", false);
  public get sTEPFUNCTIONS() {
    return this._sTEPFUNCTIONS;
  }
  public putSTEPFUNCTIONS(value: DataLogicmonitorDeviceGroupExtraServicesSTEPFUNCTIONS[] | cdktf.IResolvable) {
    this._sTEPFUNCTIONS.internalValue = value;
  }
  public resetSTEPFUNCTIONS() {
    this._sTEPFUNCTIONS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sTEPFUNCTIONSInput() {
    return this._sTEPFUNCTIONS.internalValue;
  }

  // s_t_o_r_a_g_e_a_c_c_o_u_n_t - computed: false, optional: true, required: false
  private _sTORAGEACCOUNT = new DataLogicmonitorDeviceGroupExtraServicesSTORAGEACCOUNTList(this, "s_t_o_r_a_g_e_a_c_c_o_u_n_t", false);
  public get sTORAGEACCOUNT() {
    return this._sTORAGEACCOUNT;
  }
  public putSTORAGEACCOUNT(value: DataLogicmonitorDeviceGroupExtraServicesSTORAGEACCOUNT[] | cdktf.IResolvable) {
    this._sTORAGEACCOUNT.internalValue = value;
  }
  public resetSTORAGEACCOUNT() {
    this._sTORAGEACCOUNT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sTORAGEACCOUNTInput() {
    return this._sTORAGEACCOUNT.internalValue;
  }

  // s_w_f_a_c_t_i_v_i_t_y - computed: false, optional: true, required: false
  private _sWFACTIVITY = new DataLogicmonitorDeviceGroupExtraServicesSWFACTIVITYList(this, "s_w_f_a_c_t_i_v_i_t_y", false);
  public get sWFACTIVITY() {
    return this._sWFACTIVITY;
  }
  public putSWFACTIVITY(value: DataLogicmonitorDeviceGroupExtraServicesSWFACTIVITY[] | cdktf.IResolvable) {
    this._sWFACTIVITY.internalValue = value;
  }
  public resetSWFACTIVITY() {
    this._sWFACTIVITY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sWFACTIVITYInput() {
    return this._sWFACTIVITY.internalValue;
  }

  // s_w_f_w_o_r_k_f_l_o_w - computed: false, optional: true, required: false
  private _sWFWORKFLOW = new DataLogicmonitorDeviceGroupExtraServicesSWFWORKFLOWList(this, "s_w_f_w_o_r_k_f_l_o_w", false);
  public get sWFWORKFLOW() {
    return this._sWFWORKFLOW;
  }
  public putSWFWORKFLOW(value: DataLogicmonitorDeviceGroupExtraServicesSWFWORKFLOW[] | cdktf.IResolvable) {
    this._sWFWORKFLOW.internalValue = value;
  }
  public resetSWFWORKFLOW() {
    this._sWFWORKFLOW.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sWFWORKFLOWInput() {
    return this._sWFWORKFLOW.internalValue;
  }

  // s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s - computed: false, optional: true, required: false
  private _sYNAPSEWORKSPACES = new DataLogicmonitorDeviceGroupExtraServicesSYNAPSEWORKSPACESList(this, "s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s", false);
  public get sYNAPSEWORKSPACES() {
    return this._sYNAPSEWORKSPACES;
  }
  public putSYNAPSEWORKSPACES(value: DataLogicmonitorDeviceGroupExtraServicesSYNAPSEWORKSPACES[] | cdktf.IResolvable) {
    this._sYNAPSEWORKSPACES.internalValue = value;
  }
  public resetSYNAPSEWORKSPACES() {
    this._sYNAPSEWORKSPACES.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sYNAPSEWORKSPACESInput() {
    return this._sYNAPSEWORKSPACES.internalValue;
  }

  // sql_d_a_t_a_b_a_s_e - computed: false, optional: true, required: false
  private _sqlDATABASE = new DataLogicmonitorDeviceGroupExtraServicesSqlDATABASEList(this, "sql_d_a_t_a_b_a_s_e", false);
  public get sqlDATABASE() {
    return this._sqlDATABASE;
  }
  public putSqlDATABASE(value: DataLogicmonitorDeviceGroupExtraServicesSqlDATABASE[] | cdktf.IResolvable) {
    this._sqlDATABASE.internalValue = value;
  }
  public resetSqlDATABASE() {
    this._sqlDATABASE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlDATABASEInput() {
    return this._sqlDATABASE.internalValue;
  }

  // sql_e_l_a_s_t_i_c_p_o_o_l - computed: false, optional: true, required: false
  private _sqlELASTICPOOL = new DataLogicmonitorDeviceGroupExtraServicesSqlELASTICPOOLList(this, "sql_e_l_a_s_t_i_c_p_o_o_l", false);
  public get sqlELASTICPOOL() {
    return this._sqlELASTICPOOL;
  }
  public putSqlELASTICPOOL(value: DataLogicmonitorDeviceGroupExtraServicesSqlELASTICPOOL[] | cdktf.IResolvable) {
    this._sqlELASTICPOOL.internalValue = value;
  }
  public resetSqlELASTICPOOL() {
    this._sqlELASTICPOOL.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlELASTICPOOLInput() {
    return this._sqlELASTICPOOL.internalValue;
  }

  // sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e - computed: false, optional: true, required: false
  private _sqlMANAGEDINSTANCE = new DataLogicmonitorDeviceGroupExtraServicesSqlMANAGEDINSTANCEList(this, "sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e", false);
  public get sqlMANAGEDINSTANCE() {
    return this._sqlMANAGEDINSTANCE;
  }
  public putSqlMANAGEDINSTANCE(value: DataLogicmonitorDeviceGroupExtraServicesSqlMANAGEDINSTANCE[] | cdktf.IResolvable) {
    this._sqlMANAGEDINSTANCE.internalValue = value;
  }
  public resetSqlMANAGEDINSTANCE() {
    this._sqlMANAGEDINSTANCE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlMANAGEDINSTANCEInput() {
    return this._sqlMANAGEDINSTANCE.internalValue;
  }

  // t_a_b_l_e_s_t_o_r_a_g_e - computed: false, optional: true, required: false
  private _tABLESTORAGE = new DataLogicmonitorDeviceGroupExtraServicesTABLESTORAGEList(this, "t_a_b_l_e_s_t_o_r_a_g_e", false);
  public get tABLESTORAGE() {
    return this._tABLESTORAGE;
  }
  public putTABLESTORAGE(value: DataLogicmonitorDeviceGroupExtraServicesTABLESTORAGE[] | cdktf.IResolvable) {
    this._tABLESTORAGE.internalValue = value;
  }
  public resetTABLESTORAGE() {
    this._tABLESTORAGE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tABLESTORAGEInput() {
    return this._tABLESTORAGE.internalValue;
  }

  // t_r_a_f_f_i_c_m_a_n_a_g_e_r - computed: false, optional: true, required: false
  private _tRAFFICMANAGER = new DataLogicmonitorDeviceGroupExtraServicesTRAFFICMANAGERList(this, "t_r_a_f_f_i_c_m_a_n_a_g_e_r", false);
  public get tRAFFICMANAGER() {
    return this._tRAFFICMANAGER;
  }
  public putTRAFFICMANAGER(value: DataLogicmonitorDeviceGroupExtraServicesTRAFFICMANAGER[] | cdktf.IResolvable) {
    this._tRAFFICMANAGER.internalValue = value;
  }
  public resetTRAFFICMANAGER() {
    this._tRAFFICMANAGER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tRAFFICMANAGERInput() {
    return this._tRAFFICMANAGER.internalValue;
  }

  // t_r_a_n_s_i_t_g_a_t_e_w_a_y - computed: false, optional: true, required: false
  private _tRANSITGATEWAY = new DataLogicmonitorDeviceGroupExtraServicesTRANSITGATEWAYList(this, "t_r_a_n_s_i_t_g_a_t_e_w_a_y", false);
  public get tRANSITGATEWAY() {
    return this._tRANSITGATEWAY;
  }
  public putTRANSITGATEWAY(value: DataLogicmonitorDeviceGroupExtraServicesTRANSITGATEWAY[] | cdktf.IResolvable) {
    this._tRANSITGATEWAY.internalValue = value;
  }
  public resetTRANSITGATEWAY() {
    this._tRANSITGATEWAY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tRANSITGATEWAYInput() {
    return this._tRANSITGATEWAY.internalValue;
  }

  // v_i_r_t_u_a_l_d_e_s_k_t_o_p - computed: false, optional: true, required: false
  private _vIRTUALDESKTOP = new DataLogicmonitorDeviceGroupExtraServicesVIRTUALDESKTOPList(this, "v_i_r_t_u_a_l_d_e_s_k_t_o_p", false);
  public get vIRTUALDESKTOP() {
    return this._vIRTUALDESKTOP;
  }
  public putVIRTUALDESKTOP(value: DataLogicmonitorDeviceGroupExtraServicesVIRTUALDESKTOP[] | cdktf.IResolvable) {
    this._vIRTUALDESKTOP.internalValue = value;
  }
  public resetVIRTUALDESKTOP() {
    this._vIRTUALDESKTOP.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vIRTUALDESKTOPInput() {
    return this._vIRTUALDESKTOP.internalValue;
  }

  // v_i_r_t_u_a_l_m_a_c_h_i_n_e - computed: false, optional: true, required: false
  private _vIRTUALMACHINE = new DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINEList(this, "v_i_r_t_u_a_l_m_a_c_h_i_n_e", false);
  public get vIRTUALMACHINE() {
    return this._vIRTUALMACHINE;
  }
  public putVIRTUALMACHINE(value: DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINE[] | cdktf.IResolvable) {
    this._vIRTUALMACHINE.internalValue = value;
  }
  public resetVIRTUALMACHINE() {
    this._vIRTUALMACHINE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vIRTUALMACHINEInput() {
    return this._vIRTUALMACHINE.internalValue;
  }

  // v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t - computed: false, optional: true, required: false
  private _vIRTUALMACHINESCALESET = new DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETList(this, "v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t", false);
  public get vIRTUALMACHINESCALESET() {
    return this._vIRTUALMACHINESCALESET;
  }
  public putVIRTUALMACHINESCALESET(value: DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESET[] | cdktf.IResolvable) {
    this._vIRTUALMACHINESCALESET.internalValue = value;
  }
  public resetVIRTUALMACHINESCALESET() {
    this._vIRTUALMACHINESCALESET.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vIRTUALMACHINESCALESETInput() {
    return this._vIRTUALMACHINESCALESET.internalValue;
  }

  // v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm - computed: false, optional: true, required: false
  private _vIRTUALMACHINESCALESETVm = new DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETVmList(this, "v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm", false);
  public get vIRTUALMACHINESCALESETVm() {
    return this._vIRTUALMACHINESCALESETVm;
  }
  public putVIRTUALMACHINESCALESETVm(value: DataLogicmonitorDeviceGroupExtraServicesVIRTUALMACHINESCALESETVm[] | cdktf.IResolvable) {
    this._vIRTUALMACHINESCALESETVm.internalValue = value;
  }
  public resetVIRTUALMACHINESCALESETVm() {
    this._vIRTUALMACHINESCALESETVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vIRTUALMACHINESCALESETVmInput() {
    return this._vIRTUALMACHINESCALESETVm.internalValue;
  }

  // v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y - computed: false, optional: true, required: false
  private _vIRTUALNETWORKGATEWAY = new DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAYList(this, "v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y", false);
  public get vIRTUALNETWORKGATEWAY() {
    return this._vIRTUALNETWORKGATEWAY;
  }
  public putVIRTUALNETWORKGATEWAY(value: DataLogicmonitorDeviceGroupExtraServicesVIRTUALNETWORKGATEWAY[] | cdktf.IResolvable) {
    this._vIRTUALNETWORKGATEWAY.internalValue = value;
  }
  public resetVIRTUALNETWORKGATEWAY() {
    this._vIRTUALNETWORKGATEWAY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vIRTUALNETWORKGATEWAYInput() {
    return this._vIRTUALNETWORKGATEWAY.internalValue;
  }

  // v_p_n - computed: false, optional: true, required: false
  private _vPN = new DataLogicmonitorDeviceGroupExtraServicesVPNList(this, "v_p_n", false);
  public get vPN() {
    return this._vPN;
  }
  public putVPN(value: DataLogicmonitorDeviceGroupExtraServicesVPN[] | cdktf.IResolvable) {
    this._vPN.internalValue = value;
  }
  public resetVPN() {
    this._vPN.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vPNInput() {
    return this._vPN.internalValue;
  }

  // w_o_r_k_s_p_a_c_e - computed: false, optional: true, required: false
  private _wORKSPACE = new DataLogicmonitorDeviceGroupExtraServicesWORKSPACEList(this, "w_o_r_k_s_p_a_c_e", false);
  public get wORKSPACE() {
    return this._wORKSPACE;
  }
  public putWORKSPACE(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACE[] | cdktf.IResolvable) {
    this._wORKSPACE.internalValue = value;
  }
  public resetWORKSPACE() {
    this._wORKSPACE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wORKSPACEInput() {
    return this._wORKSPACE.internalValue;
  }

  // w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y - computed: false, optional: true, required: false
  private _wORKSPACEDIRECTORY = new DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORYList(this, "w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y", false);
  public get wORKSPACEDIRECTORY() {
    return this._wORKSPACEDIRECTORY;
  }
  public putWORKSPACEDIRECTORY(value: DataLogicmonitorDeviceGroupExtraServicesWORKSPACEDIRECTORY[] | cdktf.IResolvable) {
    this._wORKSPACEDIRECTORY.internalValue = value;
  }
  public resetWORKSPACEDIRECTORY() {
    this._wORKSPACEDIRECTORY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wORKSPACEDIRECTORYInput() {
    return this._wORKSPACEDIRECTORY.internalValue;
  }
}

export class DataLogicmonitorDeviceGroupExtraServicesList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtraServices[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraServicesOutputReference {
    return new DataLogicmonitorDeviceGroupExtraServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupExtra {
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#account DataLogicmonitorDeviceGroup#account}
  */
  readonly account: DataLogicmonitorDeviceGroupExtraAccount[] | cdktf.IResolvable;
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#default DataLogicmonitorDeviceGroup#default}
  */
  readonly default: DataLogicmonitorDeviceGroupExtraDefault[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#services DataLogicmonitorDeviceGroup#services}
  */
  readonly services: DataLogicmonitorDeviceGroupExtraServices[] | cdktf.IResolvable;
}

export function dataLogicmonitorDeviceGroupExtraToTerraform(struct?: DataLogicmonitorDeviceGroupExtra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraAccountToTerraform, true)(struct!.account),
    default: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraDefaultToTerraform, true)(struct!.default),
    services: cdktf.listMapper(dataLogicmonitorDeviceGroupExtraServicesToTerraform, true)(struct!.services),
  }
}


export function dataLogicmonitorDeviceGroupExtraToHclTerraform(struct?: DataLogicmonitorDeviceGroupExtra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraAccountList",
    },
    default: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraDefaultToHclTerraform, true)(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraDefaultList",
    },
    services: {
      value: cdktf.listMapperHcl(dataLogicmonitorDeviceGroupExtraServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorDeviceGroupExtraServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupExtraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupExtra | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account?.internalValue;
    }
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupExtra | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account.internalValue = undefined;
      this._default.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account.internalValue = value.account;
      this._default.internalValue = value.default;
      this._services.internalValue = value.services;
    }
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DataLogicmonitorDeviceGroupExtraDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // account - computed: false, optional: false, required: true
  private _account = new DataLogicmonitorDeviceGroupExtraAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DataLogicmonitorDeviceGroupExtraAccount[] | cdktf.IResolvable) {
    this._account.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // default - computed: false, optional: false, required: true
  private _default = new DataLogicmonitorDeviceGroupExtraDefaultList(this, "default", false);
  public get default() {
    return this._default;
  }
  public putDefault(value: DataLogicmonitorDeviceGroupExtraDefault[] | cdktf.IResolvable) {
    this._default.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // services - computed: false, optional: false, required: true
  private _services = new DataLogicmonitorDeviceGroupExtraServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataLogicmonitorDeviceGroupExtraServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}

export class DataLogicmonitorDeviceGroupExtraList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupExtra[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupExtraOutputReference {
    return new DataLogicmonitorDeviceGroupExtraOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupGcpTestResult {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#detail_link DataLogicmonitorDeviceGroup#detail_link}
  */
  readonly detailLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#no_permission_services DataLogicmonitorDeviceGroup#no_permission_services}
  */
  readonly noPermissionServices?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#non_permission_errors DataLogicmonitorDeviceGroup#non_permission_errors}
  */
  readonly nonPermissionErrors?: string[];
}

export function dataLogicmonitorDeviceGroupGcpTestResultToTerraform(struct?: DataLogicmonitorDeviceGroupGcpTestResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detail_link: cdktf.stringToTerraform(struct!.detailLink),
    no_permission_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noPermissionServices),
    non_permission_errors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonPermissionErrors),
  }
}


export function dataLogicmonitorDeviceGroupGcpTestResultToHclTerraform(struct?: DataLogicmonitorDeviceGroupGcpTestResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detail_link: {
      value: cdktf.stringToHclTerraform(struct!.detailLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_permission_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noPermissionServices),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    non_permission_errors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonPermissionErrors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupGcpTestResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupGcpTestResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailLink = this._detailLink;
    }
    if (this._noPermissionServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPermissionServices = this._noPermissionServices;
    }
    if (this._nonPermissionErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonPermissionErrors = this._nonPermissionErrors;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupGcpTestResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detailLink = undefined;
      this._noPermissionServices = undefined;
      this._nonPermissionErrors = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detailLink = value.detailLink;
      this._noPermissionServices = value.noPermissionServices;
      this._nonPermissionErrors = value.nonPermissionErrors;
    }
  }

  // detail_link - computed: false, optional: true, required: false
  private _detailLink?: string; 
  public get detailLink() {
    return this.getStringAttribute('detail_link');
  }
  public set detailLink(value: string) {
    this._detailLink = value;
  }
  public resetDetailLink() {
    this._detailLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailLinkInput() {
    return this._detailLink;
  }

  // no_permission_services - computed: false, optional: true, required: false
  private _noPermissionServices?: string[]; 
  public get noPermissionServices() {
    return cdktf.Fn.tolist(this.getListAttribute('no_permission_services'));
  }
  public set noPermissionServices(value: string[]) {
    this._noPermissionServices = value;
  }
  public resetNoPermissionServices() {
    this._noPermissionServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPermissionServicesInput() {
    return this._noPermissionServices;
  }

  // non_permission_errors - computed: false, optional: true, required: false
  private _nonPermissionErrors?: string[]; 
  public get nonPermissionErrors() {
    return cdktf.Fn.tolist(this.getListAttribute('non_permission_errors'));
  }
  public set nonPermissionErrors(value: string[]) {
    this._nonPermissionErrors = value;
  }
  public resetNonPermissionErrors() {
    this._nonPermissionErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonPermissionErrorsInput() {
    return this._nonPermissionErrors;
  }
}

export class DataLogicmonitorDeviceGroupGcpTestResultList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupGcpTestResult[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupGcpTestResultOutputReference {
    return new DataLogicmonitorDeviceGroupGcpTestResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorDeviceGroupSaasTestResult {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#detail_link DataLogicmonitorDeviceGroup#detail_link}
  */
  readonly detailLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#invalid_status_urls DataLogicmonitorDeviceGroup#invalid_status_urls}
  */
  readonly invalidStatusUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#no_permission_apis DataLogicmonitorDeviceGroup#no_permission_apis}
  */
  readonly noPermissionApis?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#no_permission_service DataLogicmonitorDeviceGroup#no_permission_service}
  */
  readonly noPermissionService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#non_permission_apis_errors DataLogicmonitorDeviceGroup#non_permission_apis_errors}
  */
  readonly nonPermissionApisErrors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.27/docs/data-sources/device_group#result_code DataLogicmonitorDeviceGroup#result_code}
  */
  readonly resultCode?: number;
}

export function dataLogicmonitorDeviceGroupSaasTestResultToTerraform(struct?: DataLogicmonitorDeviceGroupSaasTestResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detail_link: cdktf.stringToTerraform(struct!.detailLink),
    invalid_status_urls: cdktf.stringToTerraform(struct!.invalidStatusUrls),
    no_permission_apis: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.noPermissionApis),
    no_permission_service: cdktf.stringToTerraform(struct!.noPermissionService),
    non_permission_apis_errors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nonPermissionApisErrors),
    result_code: cdktf.numberToTerraform(struct!.resultCode),
  }
}


export function dataLogicmonitorDeviceGroupSaasTestResultToHclTerraform(struct?: DataLogicmonitorDeviceGroupSaasTestResult | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detail_link: {
      value: cdktf.stringToHclTerraform(struct!.detailLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invalid_status_urls: {
      value: cdktf.stringToHclTerraform(struct!.invalidStatusUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_permission_apis: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.noPermissionApis),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    no_permission_service: {
      value: cdktf.stringToHclTerraform(struct!.noPermissionService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    non_permission_apis_errors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nonPermissionApisErrors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    result_code: {
      value: cdktf.numberToHclTerraform(struct!.resultCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorDeviceGroupSaasTestResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLogicmonitorDeviceGroupSaasTestResult | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detailLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailLink = this._detailLink;
    }
    if (this._invalidStatusUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidStatusUrls = this._invalidStatusUrls;
    }
    if (this._noPermissionApis !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPermissionApis = this._noPermissionApis;
    }
    if (this._noPermissionService !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPermissionService = this._noPermissionService;
    }
    if (this._nonPermissionApisErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonPermissionApisErrors = this._nonPermissionApisErrors;
    }
    if (this._resultCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultCode = this._resultCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorDeviceGroupSaasTestResult | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._detailLink = undefined;
      this._invalidStatusUrls = undefined;
      this._noPermissionApis = undefined;
      this._noPermissionService = undefined;
      this._nonPermissionApisErrors = undefined;
      this._resultCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._detailLink = value.detailLink;
      this._invalidStatusUrls = value.invalidStatusUrls;
      this._noPermissionApis = value.noPermissionApis;
      this._noPermissionService = value.noPermissionService;
      this._nonPermissionApisErrors = value.nonPermissionApisErrors;
      this._resultCode = value.resultCode;
    }
  }

  // detail_link - computed: false, optional: true, required: false
  private _detailLink?: string; 
  public get detailLink() {
    return this.getStringAttribute('detail_link');
  }
  public set detailLink(value: string) {
    this._detailLink = value;
  }
  public resetDetailLink() {
    this._detailLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailLinkInput() {
    return this._detailLink;
  }

  // invalid_status_urls - computed: false, optional: true, required: false
  private _invalidStatusUrls?: string; 
  public get invalidStatusUrls() {
    return this.getStringAttribute('invalid_status_urls');
  }
  public set invalidStatusUrls(value: string) {
    this._invalidStatusUrls = value;
  }
  public resetInvalidStatusUrls() {
    this._invalidStatusUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStatusUrlsInput() {
    return this._invalidStatusUrls;
  }

  // no_permission_apis - computed: false, optional: true, required: false
  private _noPermissionApis?: string[]; 
  public get noPermissionApis() {
    return cdktf.Fn.tolist(this.getListAttribute('no_permission_apis'));
  }
  public set noPermissionApis(value: string[]) {
    this._noPermissionApis = value;
  }
  public resetNoPermissionApis() {
    this._noPermissionApis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPermissionApisInput() {
    return this._noPermissionApis;
  }

  // no_permission_service - computed: false, optional: true, required: false
  private _noPermissionService?: string; 
  public get noPermissionService() {
    return this.getStringAttribute('no_permission_service');
  }
  public set noPermissionService(value: string) {
    this._noPermissionService = value;
  }
  public resetNoPermissionService() {
    this._noPermissionService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPermissionServiceInput() {
    return this._noPermissionService;
  }

  // non_permission_apis_errors - computed: false, optional: true, required: false
  private _nonPermissionApisErrors?: string[]; 
  public get nonPermissionApisErrors() {
    return cdktf.Fn.tolist(this.getListAttribute('non_permission_apis_errors'));
  }
  public set nonPermissionApisErrors(value: string[]) {
    this._nonPermissionApisErrors = value;
  }
  public resetNonPermissionApisErrors() {
    this._nonPermissionApisErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonPermissionApisErrorsInput() {
    return this._nonPermissionApisErrors;
  }

  // result_code - computed: false, optional: true, required: false
  private _resultCode?: number; 
  public get resultCode() {
    return this.getNumberAttribute('result_code');
  }
  public set resultCode(value: number) {
    this._resultCode = value;
  }
  public resetResultCode() {
    this._resultCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultCodeInput() {
    return this._resultCode;
  }
}

export class DataLogicmonitorDeviceGroupSaasTestResultList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorDeviceGroupSaasTestResult[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLogicmonitorDeviceGroupSaasTestResultOutputReference {
    return new DataLogicmonitorDeviceGroupSaasTestResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
