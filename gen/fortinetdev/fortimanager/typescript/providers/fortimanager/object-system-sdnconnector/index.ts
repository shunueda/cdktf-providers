// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemSdnconnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#_local_cert ObjectSystemSdnconnector#_local_cert}
  */
  readonly localCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#access_key ObjectSystemSdnconnector#access_key}
  */
  readonly accessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#adom ObjectSystemSdnconnector#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#alt_resource_ip ObjectSystemSdnconnector#alt_resource_ip}
  */
  readonly altResourceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#api_key ObjectSystemSdnconnector#api_key}
  */
  readonly apiKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#azure_region ObjectSystemSdnconnector#azure_region}
  */
  readonly azureRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#client_id ObjectSystemSdnconnector#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#client_secret ObjectSystemSdnconnector#client_secret}
  */
  readonly clientSecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#compartment_id ObjectSystemSdnconnector#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#compute_generation ObjectSystemSdnconnector#compute_generation}
  */
  readonly computeGeneration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#domain ObjectSystemSdnconnector#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#dynamic_sort_subtable ObjectSystemSdnconnector#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#gcp_project ObjectSystemSdnconnector#gcp_project}
  */
  readonly gcpProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#group_name ObjectSystemSdnconnector#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#ha_status ObjectSystemSdnconnector#ha_status}
  */
  readonly haStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#ibm_region ObjectSystemSdnconnector#ibm_region}
  */
  readonly ibmRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#ibm_region_gen1 ObjectSystemSdnconnector#ibm_region_gen1}
  */
  readonly ibmRegionGen1?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#ibm_region_gen2 ObjectSystemSdnconnector#ibm_region_gen2}
  */
  readonly ibmRegionGen2?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#id ObjectSystemSdnconnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#key_passwd ObjectSystemSdnconnector#key_passwd}
  */
  readonly keyPasswd?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#last_update ObjectSystemSdnconnector#last_update}
  */
  readonly lastUpdate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#login_endpoint ObjectSystemSdnconnector#login_endpoint}
  */
  readonly loginEndpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#message_server_port ObjectSystemSdnconnector#message_server_port}
  */
  readonly messageServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#name ObjectSystemSdnconnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#nsx_cert_fingerprint ObjectSystemSdnconnector#nsx_cert_fingerprint}
  */
  readonly nsxCertFingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#oci_cert ObjectSystemSdnconnector#oci_cert}
  */
  readonly ociCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#oci_fingerprint ObjectSystemSdnconnector#oci_fingerprint}
  */
  readonly ociFingerprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#oci_region ObjectSystemSdnconnector#oci_region}
  */
  readonly ociRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#oci_region_type ObjectSystemSdnconnector#oci_region_type}
  */
  readonly ociRegionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#password ObjectSystemSdnconnector#password}
  */
  readonly password?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#private_key ObjectSystemSdnconnector#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#proxy ObjectSystemSdnconnector#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#region ObjectSystemSdnconnector#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#resource_group ObjectSystemSdnconnector#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#resource_url ObjectSystemSdnconnector#resource_url}
  */
  readonly resourceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#rest_interface ObjectSystemSdnconnector#rest_interface}
  */
  readonly restInterface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#rest_password ObjectSystemSdnconnector#rest_password}
  */
  readonly restPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#rest_sport ObjectSystemSdnconnector#rest_sport}
  */
  readonly restSport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#rest_ssl ObjectSystemSdnconnector#rest_ssl}
  */
  readonly restSsl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#scopetype ObjectSystemSdnconnector#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#secret_key ObjectSystemSdnconnector#secret_key}
  */
  readonly secretKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#secret_token ObjectSystemSdnconnector#secret_token}
  */
  readonly secretToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#server ObjectSystemSdnconnector#server}
  */
  readonly server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#server_ca_cert ObjectSystemSdnconnector#server_ca_cert}
  */
  readonly serverCaCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#server_cert ObjectSystemSdnconnector#server_cert}
  */
  readonly serverCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#server_list ObjectSystemSdnconnector#server_list}
  */
  readonly serverList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#server_port ObjectSystemSdnconnector#server_port}
  */
  readonly serverPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#service_account ObjectSystemSdnconnector#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#status ObjectSystemSdnconnector#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#subscription_id ObjectSystemSdnconnector#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#tenant_id ObjectSystemSdnconnector#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#type ObjectSystemSdnconnector#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#update_interval ObjectSystemSdnconnector#update_interval}
  */
  readonly updateInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#updating ObjectSystemSdnconnector#updating}
  */
  readonly updating?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#use_metadata_iam ObjectSystemSdnconnector#use_metadata_iam}
  */
  readonly useMetadataIam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#user_id ObjectSystemSdnconnector#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#username ObjectSystemSdnconnector#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#vcenter_password ObjectSystemSdnconnector#vcenter_password}
  */
  readonly vcenterPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#vcenter_server ObjectSystemSdnconnector#vcenter_server}
  */
  readonly vcenterServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#vcenter_username ObjectSystemSdnconnector#vcenter_username}
  */
  readonly vcenterUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#verify_certificate ObjectSystemSdnconnector#verify_certificate}
  */
  readonly verifyCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#vmx_image_url ObjectSystemSdnconnector#vmx_image_url}
  */
  readonly vmxImageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#vmx_service_name ObjectSystemSdnconnector#vmx_service_name}
  */
  readonly vmxServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#vpc_id ObjectSystemSdnconnector#vpc_id}
  */
  readonly vpcId?: string;
  /**
  * compartment_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#compartment_list ObjectSystemSdnconnector#compartment_list}
  */
  readonly compartmentList?: ObjectSystemSdnconnectorCompartmentListStruct[] | cdktf.IResolvable;
  /**
  * external_account_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#external_account_list ObjectSystemSdnconnector#external_account_list}
  */
  readonly externalAccountList?: ObjectSystemSdnconnectorExternalAccountListStruct[] | cdktf.IResolvable;
  /**
  * external_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#external_ip ObjectSystemSdnconnector#external_ip}
  */
  readonly externalIp?: ObjectSystemSdnconnectorExternalIp[] | cdktf.IResolvable;
  /**
  * forwarding_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#forwarding_rule ObjectSystemSdnconnector#forwarding_rule}
  */
  readonly forwardingRule?: ObjectSystemSdnconnectorForwardingRule[] | cdktf.IResolvable;
  /**
  * gcp_project_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#gcp_project_list ObjectSystemSdnconnector#gcp_project_list}
  */
  readonly gcpProjectList?: ObjectSystemSdnconnectorGcpProjectListStruct[] | cdktf.IResolvable;
  /**
  * nic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#nic ObjectSystemSdnconnector#nic}
  */
  readonly nic?: ObjectSystemSdnconnectorNic[] | cdktf.IResolvable;
  /**
  * oci_region_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#oci_region_list ObjectSystemSdnconnector#oci_region_list}
  */
  readonly ociRegionList?: ObjectSystemSdnconnectorOciRegionListStruct[] | cdktf.IResolvable;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#route ObjectSystemSdnconnector#route}
  */
  readonly route?: ObjectSystemSdnconnectorRoute[] | cdktf.IResolvable;
  /**
  * route_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#route_table ObjectSystemSdnconnector#route_table}
  */
  readonly routeTable?: ObjectSystemSdnconnectorRouteTable[] | cdktf.IResolvable;
}
export interface ObjectSystemSdnconnectorCompartmentListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#compartment_id ObjectSystemSdnconnector#compartment_id}
  */
  readonly compartmentId?: string;
}

export function objectSystemSdnconnectorCompartmentListStructToTerraform(struct?: ObjectSystemSdnconnectorCompartmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compartment_id: cdktf.stringToTerraform(struct!.compartmentId),
  }
}


export function objectSystemSdnconnectorCompartmentListStructToHclTerraform(struct?: ObjectSystemSdnconnectorCompartmentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compartment_id: {
      value: cdktf.stringToHclTerraform(struct!.compartmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorCompartmentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorCompartmentListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compartmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.compartmentId = this._compartmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorCompartmentListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compartmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compartmentId = value.compartmentId;
    }
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }
}

export class ObjectSystemSdnconnectorCompartmentListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorCompartmentListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorCompartmentListStructOutputReference {
    return new ObjectSystemSdnconnectorCompartmentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemSdnconnectorExternalAccountListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#external_id ObjectSystemSdnconnector#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#region_list ObjectSystemSdnconnector#region_list}
  */
  readonly regionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#role_arn ObjectSystemSdnconnector#role_arn}
  */
  readonly roleArn?: string;
}

export function objectSystemSdnconnectorExternalAccountListStructToTerraform(struct?: ObjectSystemSdnconnectorExternalAccountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    region_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionList),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function objectSystemSdnconnectorExternalAccountListStructToHclTerraform(struct?: ObjectSystemSdnconnectorExternalAccountListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regionList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorExternalAccountListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorExternalAccountListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._regionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionList = this._regionList;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorExternalAccountListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._regionList = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._regionList = value.regionList;
      this._roleArn = value.roleArn;
    }
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // region_list - computed: true, optional: true, required: false
  private _regionList?: string[]; 
  public get regionList() {
    return cdktf.Fn.tolist(this.getListAttribute('region_list'));
  }
  public set regionList(value: string[]) {
    this._regionList = value;
  }
  public resetRegionList() {
    this._regionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListInput() {
    return this._regionList;
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class ObjectSystemSdnconnectorExternalAccountListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorExternalAccountListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorExternalAccountListStructOutputReference {
    return new ObjectSystemSdnconnectorExternalAccountListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemSdnconnectorExternalIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#name ObjectSystemSdnconnector#name}
  */
  readonly name?: string;
}

export function objectSystemSdnconnectorExternalIpToTerraform(struct?: ObjectSystemSdnconnectorExternalIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectSystemSdnconnectorExternalIpToHclTerraform(struct?: ObjectSystemSdnconnectorExternalIp | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorExternalIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorExternalIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorExternalIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ObjectSystemSdnconnectorExternalIpList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorExternalIp[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorExternalIpOutputReference {
    return new ObjectSystemSdnconnectorExternalIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemSdnconnectorForwardingRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#rule_name ObjectSystemSdnconnector#rule_name}
  */
  readonly ruleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#target ObjectSystemSdnconnector#target}
  */
  readonly target?: string;
}

export function objectSystemSdnconnectorForwardingRuleToTerraform(struct?: ObjectSystemSdnconnectorForwardingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function objectSystemSdnconnectorForwardingRuleToHclTerraform(struct?: ObjectSystemSdnconnectorForwardingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorForwardingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorForwardingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorForwardingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ruleName = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ruleName = value.ruleName;
      this._target = value.target;
    }
  }

  // rule_name - computed: false, optional: true, required: false
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  public resetRuleName() {
    this._ruleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

export class ObjectSystemSdnconnectorForwardingRuleList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorForwardingRule[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorForwardingRuleOutputReference {
    return new ObjectSystemSdnconnectorForwardingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemSdnconnectorGcpProjectListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#gcp_zone_list ObjectSystemSdnconnector#gcp_zone_list}
  */
  readonly gcpZoneList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#id ObjectSystemSdnconnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function objectSystemSdnconnectorGcpProjectListStructToTerraform(struct?: ObjectSystemSdnconnectorGcpProjectListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_zone_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gcpZoneList),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function objectSystemSdnconnectorGcpProjectListStructToHclTerraform(struct?: ObjectSystemSdnconnectorGcpProjectListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_zone_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gcpZoneList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorGcpProjectListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorGcpProjectListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpZoneList !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpZoneList = this._gcpZoneList;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorGcpProjectListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gcpZoneList = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gcpZoneList = value.gcpZoneList;
      this._id = value.id;
    }
  }

  // gcp_zone_list - computed: true, optional: true, required: false
  private _gcpZoneList?: string[]; 
  public get gcpZoneList() {
    return cdktf.Fn.tolist(this.getListAttribute('gcp_zone_list'));
  }
  public set gcpZoneList(value: string[]) {
    this._gcpZoneList = value;
  }
  public resetGcpZoneList() {
    this._gcpZoneList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpZoneListInput() {
    return this._gcpZoneList;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ObjectSystemSdnconnectorGcpProjectListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorGcpProjectListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorGcpProjectListStructOutputReference {
    return new ObjectSystemSdnconnectorGcpProjectListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemSdnconnectorNicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#name ObjectSystemSdnconnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#private_ip ObjectSystemSdnconnector#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#public_ip ObjectSystemSdnconnector#public_ip}
  */
  readonly publicIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#resource_group ObjectSystemSdnconnector#resource_group}
  */
  readonly resourceGroup?: string;
}

export function objectSystemSdnconnectorNicIpToTerraform(struct?: ObjectSystemSdnconnectorNicIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
  }
}


export function objectSystemSdnconnectorNicIpToHclTerraform(struct?: ObjectSystemSdnconnectorNicIp | cdktf.IResolvable): any {
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
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorNicIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorNicIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorNicIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._privateIp = undefined;
      this._publicIp = undefined;
      this._resourceGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._privateIp = value.privateIp;
      this._publicIp = value.publicIp;
      this._resourceGroup = value.resourceGroup;
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

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  public resetPublicIp() {
    this._publicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }
}

export class ObjectSystemSdnconnectorNicIpList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorNicIp[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorNicIpOutputReference {
    return new ObjectSystemSdnconnectorNicIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemSdnconnectorNic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#name ObjectSystemSdnconnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#peer_nic ObjectSystemSdnconnector#peer_nic}
  */
  readonly peerNic?: string;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#ip ObjectSystemSdnconnector#ip}
  */
  readonly ip?: ObjectSystemSdnconnectorNicIp[] | cdktf.IResolvable;
}

export function objectSystemSdnconnectorNicToTerraform(struct?: ObjectSystemSdnconnectorNic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    peer_nic: cdktf.stringToTerraform(struct!.peerNic),
    ip: cdktf.listMapper(objectSystemSdnconnectorNicIpToTerraform, true)(struct!.ip),
  }
}


export function objectSystemSdnconnectorNicToHclTerraform(struct?: ObjectSystemSdnconnectorNic | cdktf.IResolvable): any {
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
    peer_nic: {
      value: cdktf.stringToHclTerraform(struct!.peerNic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.listMapperHcl(objectSystemSdnconnectorNicIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemSdnconnectorNicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorNicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorNic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._peerNic !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerNic = this._peerNic;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorNic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._peerNic = undefined;
      this._ip.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._peerNic = value.peerNic;
      this._ip.internalValue = value.ip;
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

  // peer_nic - computed: false, optional: true, required: false
  private _peerNic?: string; 
  public get peerNic() {
    return this.getStringAttribute('peer_nic');
  }
  public set peerNic(value: string) {
    this._peerNic = value;
  }
  public resetPeerNic() {
    this._peerNic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNicInput() {
    return this._peerNic;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ObjectSystemSdnconnectorNicIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: ObjectSystemSdnconnectorNicIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}

export class ObjectSystemSdnconnectorNicList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorNic[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorNicOutputReference {
    return new ObjectSystemSdnconnectorNicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemSdnconnectorOciRegionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#region ObjectSystemSdnconnector#region}
  */
  readonly region?: string;
}

export function objectSystemSdnconnectorOciRegionListStructToTerraform(struct?: ObjectSystemSdnconnectorOciRegionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
  }
}


export function objectSystemSdnconnectorOciRegionListStructToHclTerraform(struct?: ObjectSystemSdnconnectorOciRegionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorOciRegionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorOciRegionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorOciRegionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
    }
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }
}

export class ObjectSystemSdnconnectorOciRegionListStructList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorOciRegionListStruct[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorOciRegionListStructOutputReference {
    return new ObjectSystemSdnconnectorOciRegionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemSdnconnectorRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#name ObjectSystemSdnconnector#name}
  */
  readonly name?: string;
}

export function objectSystemSdnconnectorRouteToTerraform(struct?: ObjectSystemSdnconnectorRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function objectSystemSdnconnectorRouteToHclTerraform(struct?: ObjectSystemSdnconnectorRoute | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ObjectSystemSdnconnectorRouteList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorRoute[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorRouteOutputReference {
    return new ObjectSystemSdnconnectorRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemSdnconnectorRouteTableRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#name ObjectSystemSdnconnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#next_hop ObjectSystemSdnconnector#next_hop}
  */
  readonly nextHop?: string;
}

export function objectSystemSdnconnectorRouteTableRouteToTerraform(struct?: ObjectSystemSdnconnectorRouteTableRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
  }
}


export function objectSystemSdnconnectorRouteTableRouteToHclTerraform(struct?: ObjectSystemSdnconnectorRouteTableRoute | cdktf.IResolvable): any {
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
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorRouteTableRouteOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorRouteTableRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorRouteTableRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nextHop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._nextHop = value.nextHop;
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

  // next_hop - computed: false, optional: true, required: false
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  public resetNextHop() {
    this._nextHop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }
}

export class ObjectSystemSdnconnectorRouteTableRouteList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorRouteTableRoute[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorRouteTableRouteOutputReference {
    return new ObjectSystemSdnconnectorRouteTableRouteOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectSystemSdnconnectorRouteTable {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#name ObjectSystemSdnconnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#resource_group ObjectSystemSdnconnector#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#subscription_id ObjectSystemSdnconnector#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * route block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#route ObjectSystemSdnconnector#route}
  */
  readonly route?: ObjectSystemSdnconnectorRouteTableRoute[] | cdktf.IResolvable;
}

export function objectSystemSdnconnectorRouteTableToTerraform(struct?: ObjectSystemSdnconnectorRouteTable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    route: cdktf.listMapper(objectSystemSdnconnectorRouteTableRouteToTerraform, true)(struct!.route),
  }
}


export function objectSystemSdnconnectorRouteTableToHclTerraform(struct?: ObjectSystemSdnconnectorRouteTable | cdktf.IResolvable): any {
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route: {
      value: cdktf.listMapperHcl(objectSystemSdnconnectorRouteTableRouteToHclTerraform, true)(struct!.route),
      isBlock: true,
      type: "list",
      storageClassType: "ObjectSystemSdnconnectorRouteTableRouteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectSystemSdnconnectorRouteTableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectSystemSdnconnectorRouteTable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectSystemSdnconnectorRouteTable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resourceGroup = undefined;
      this._subscriptionId = undefined;
      this._route.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resourceGroup = value.resourceGroup;
      this._subscriptionId = value.subscriptionId;
      this._route.internalValue = value.route;
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

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // route - computed: false, optional: true, required: false
  private _route = new ObjectSystemSdnconnectorRouteTableRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: ObjectSystemSdnconnectorRouteTableRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }
}

export class ObjectSystemSdnconnectorRouteTableList extends cdktf.ComplexList {
  public internalValue? : ObjectSystemSdnconnectorRouteTable[] | cdktf.IResolvable

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
  public get(index: number): ObjectSystemSdnconnectorRouteTableOutputReference {
    return new ObjectSystemSdnconnectorRouteTableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector fortimanager_object_system_sdnconnector}
*/
export class ObjectSystemSdnconnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_sdnconnector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemSdnconnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemSdnconnector to import
  * @param importFromId The id of the existing ObjectSystemSdnconnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemSdnconnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_sdnconnector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_sdnconnector fortimanager_object_system_sdnconnector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemSdnconnectorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemSdnconnectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_sdnconnector',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._localCert = config.localCert;
    this._accessKey = config.accessKey;
    this._adom = config.adom;
    this._altResourceIp = config.altResourceIp;
    this._apiKey = config.apiKey;
    this._azureRegion = config.azureRegion;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._compartmentId = config.compartmentId;
    this._computeGeneration = config.computeGeneration;
    this._domain = config.domain;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._gcpProject = config.gcpProject;
    this._groupName = config.groupName;
    this._haStatus = config.haStatus;
    this._ibmRegion = config.ibmRegion;
    this._ibmRegionGen1 = config.ibmRegionGen1;
    this._ibmRegionGen2 = config.ibmRegionGen2;
    this._id = config.id;
    this._keyPasswd = config.keyPasswd;
    this._lastUpdate = config.lastUpdate;
    this._loginEndpoint = config.loginEndpoint;
    this._messageServerPort = config.messageServerPort;
    this._name = config.name;
    this._nsxCertFingerprint = config.nsxCertFingerprint;
    this._ociCert = config.ociCert;
    this._ociFingerprint = config.ociFingerprint;
    this._ociRegion = config.ociRegion;
    this._ociRegionType = config.ociRegionType;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._proxy = config.proxy;
    this._region = config.region;
    this._resourceGroup = config.resourceGroup;
    this._resourceUrl = config.resourceUrl;
    this._restInterface = config.restInterface;
    this._restPassword = config.restPassword;
    this._restSport = config.restSport;
    this._restSsl = config.restSsl;
    this._scopetype = config.scopetype;
    this._secretKey = config.secretKey;
    this._secretToken = config.secretToken;
    this._server = config.server;
    this._serverCaCert = config.serverCaCert;
    this._serverCert = config.serverCert;
    this._serverList = config.serverList;
    this._serverPort = config.serverPort;
    this._serviceAccount = config.serviceAccount;
    this._status = config.status;
    this._subscriptionId = config.subscriptionId;
    this._tenantId = config.tenantId;
    this._type = config.type;
    this._updateInterval = config.updateInterval;
    this._updating = config.updating;
    this._useMetadataIam = config.useMetadataIam;
    this._userId = config.userId;
    this._username = config.username;
    this._vcenterPassword = config.vcenterPassword;
    this._vcenterServer = config.vcenterServer;
    this._vcenterUsername = config.vcenterUsername;
    this._verifyCertificate = config.verifyCertificate;
    this._vmxImageUrl = config.vmxImageUrl;
    this._vmxServiceName = config.vmxServiceName;
    this._vpcId = config.vpcId;
    this._compartmentList.internalValue = config.compartmentList;
    this._externalAccountList.internalValue = config.externalAccountList;
    this._externalIp.internalValue = config.externalIp;
    this._forwardingRule.internalValue = config.forwardingRule;
    this._gcpProjectList.internalValue = config.gcpProjectList;
    this._nic.internalValue = config.nic;
    this._ociRegionList.internalValue = config.ociRegionList;
    this._route.internalValue = config.route;
    this._routeTable.internalValue = config.routeTable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // _local_cert - computed: false, optional: true, required: false
  private _localCert?: string; 
  public get localCert() {
    return this.getStringAttribute('_local_cert');
  }
  public set localCert(value: string) {
    this._localCert = value;
  }
  public resetLocalCert() {
    this._localCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localCertInput() {
    return this._localCert;
  }

  // access_key - computed: true, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // alt_resource_ip - computed: true, optional: true, required: false
  private _altResourceIp?: string; 
  public get altResourceIp() {
    return this.getStringAttribute('alt_resource_ip');
  }
  public set altResourceIp(value: string) {
    this._altResourceIp = value;
  }
  public resetAltResourceIp() {
    this._altResourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altResourceIpInput() {
    return this._altResourceIp;
  }

  // api_key - computed: true, optional: true, required: false
  private _apiKey?: string[]; 
  public get apiKey() {
    return cdktf.Fn.tolist(this.getListAttribute('api_key'));
  }
  public set apiKey(value: string[]) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // azure_region - computed: false, optional: true, required: false
  private _azureRegion?: string; 
  public get azureRegion() {
    return this.getStringAttribute('azure_region');
  }
  public set azureRegion(value: string) {
    this._azureRegion = value;
  }
  public resetAzureRegion() {
    this._azureRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureRegionInput() {
    return this._azureRegion;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string[]; 
  public get clientSecret() {
    return cdktf.Fn.tolist(this.getListAttribute('client_secret'));
  }
  public set clientSecret(value: string[]) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compute_generation - computed: true, optional: true, required: false
  private _computeGeneration?: number; 
  public get computeGeneration() {
    return this.getNumberAttribute('compute_generation');
  }
  public set computeGeneration(value: number) {
    this._computeGeneration = value;
  }
  public resetComputeGeneration() {
    this._computeGeneration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeGenerationInput() {
    return this._computeGeneration;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // gcp_project - computed: false, optional: true, required: false
  private _gcpProject?: string; 
  public get gcpProject() {
    return this.getStringAttribute('gcp_project');
  }
  public set gcpProject(value: string) {
    this._gcpProject = value;
  }
  public resetGcpProject() {
    this._gcpProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectInput() {
    return this._gcpProject;
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // ha_status - computed: false, optional: true, required: false
  private _haStatus?: string; 
  public get haStatus() {
    return this.getStringAttribute('ha_status');
  }
  public set haStatus(value: string) {
    this._haStatus = value;
  }
  public resetHaStatus() {
    this._haStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStatusInput() {
    return this._haStatus;
  }

  // ibm_region - computed: true, optional: true, required: false
  private _ibmRegion?: string; 
  public get ibmRegion() {
    return this.getStringAttribute('ibm_region');
  }
  public set ibmRegion(value: string) {
    this._ibmRegion = value;
  }
  public resetIbmRegion() {
    this._ibmRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmRegionInput() {
    return this._ibmRegion;
  }

  // ibm_region_gen1 - computed: true, optional: true, required: false
  private _ibmRegionGen1?: string; 
  public get ibmRegionGen1() {
    return this.getStringAttribute('ibm_region_gen1');
  }
  public set ibmRegionGen1(value: string) {
    this._ibmRegionGen1 = value;
  }
  public resetIbmRegionGen1() {
    this._ibmRegionGen1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmRegionGen1Input() {
    return this._ibmRegionGen1;
  }

  // ibm_region_gen2 - computed: true, optional: true, required: false
  private _ibmRegionGen2?: string; 
  public get ibmRegionGen2() {
    return this.getStringAttribute('ibm_region_gen2');
  }
  public set ibmRegionGen2(value: string) {
    this._ibmRegionGen2 = value;
  }
  public resetIbmRegionGen2() {
    this._ibmRegionGen2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibmRegionGen2Input() {
    return this._ibmRegionGen2;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key_passwd - computed: true, optional: true, required: false
  private _keyPasswd?: string[]; 
  public get keyPasswd() {
    return cdktf.Fn.tolist(this.getListAttribute('key_passwd'));
  }
  public set keyPasswd(value: string[]) {
    this._keyPasswd = value;
  }
  public resetKeyPasswd() {
    this._keyPasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPasswdInput() {
    return this._keyPasswd;
  }

  // last_update - computed: false, optional: true, required: false
  private _lastUpdate?: number; 
  public get lastUpdate() {
    return this.getNumberAttribute('last_update');
  }
  public set lastUpdate(value: number) {
    this._lastUpdate = value;
  }
  public resetLastUpdate() {
    this._lastUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdateInput() {
    return this._lastUpdate;
  }

  // login_endpoint - computed: false, optional: true, required: false
  private _loginEndpoint?: string; 
  public get loginEndpoint() {
    return this.getStringAttribute('login_endpoint');
  }
  public set loginEndpoint(value: string) {
    this._loginEndpoint = value;
  }
  public resetLoginEndpoint() {
    this._loginEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginEndpointInput() {
    return this._loginEndpoint;
  }

  // message_server_port - computed: false, optional: true, required: false
  private _messageServerPort?: number; 
  public get messageServerPort() {
    return this.getNumberAttribute('message_server_port');
  }
  public set messageServerPort(value: number) {
    this._messageServerPort = value;
  }
  public resetMessageServerPort() {
    this._messageServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageServerPortInput() {
    return this._messageServerPort;
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

  // nsx_cert_fingerprint - computed: false, optional: true, required: false
  private _nsxCertFingerprint?: string; 
  public get nsxCertFingerprint() {
    return this.getStringAttribute('nsx_cert_fingerprint');
  }
  public set nsxCertFingerprint(value: string) {
    this._nsxCertFingerprint = value;
  }
  public resetNsxCertFingerprint() {
    this._nsxCertFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxCertFingerprintInput() {
    return this._nsxCertFingerprint;
  }

  // oci_cert - computed: false, optional: true, required: false
  private _ociCert?: string; 
  public get ociCert() {
    return this.getStringAttribute('oci_cert');
  }
  public set ociCert(value: string) {
    this._ociCert = value;
  }
  public resetOciCert() {
    this._ociCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociCertInput() {
    return this._ociCert;
  }

  // oci_fingerprint - computed: false, optional: true, required: false
  private _ociFingerprint?: string; 
  public get ociFingerprint() {
    return this.getStringAttribute('oci_fingerprint');
  }
  public set ociFingerprint(value: string) {
    this._ociFingerprint = value;
  }
  public resetOciFingerprint() {
    this._ociFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociFingerprintInput() {
    return this._ociFingerprint;
  }

  // oci_region - computed: false, optional: true, required: false
  private _ociRegion?: string; 
  public get ociRegion() {
    return this.getStringAttribute('oci_region');
  }
  public set ociRegion(value: string) {
    this._ociRegion = value;
  }
  public resetOciRegion() {
    this._ociRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociRegionInput() {
    return this._ociRegion;
  }

  // oci_region_type - computed: false, optional: true, required: false
  private _ociRegionType?: string; 
  public get ociRegionType() {
    return this.getStringAttribute('oci_region_type');
  }
  public set ociRegionType(value: string) {
    this._ociRegionType = value;
  }
  public resetOciRegionType() {
    this._ociRegionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociRegionTypeInput() {
    return this._ociRegionType;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string[]; 
  public get password() {
    return cdktf.Fn.tolist(this.getListAttribute('password'));
  }
  public set password(value: string[]) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this.getStringAttribute('proxy');
  }
  public set proxy(value: string) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_url - computed: false, optional: true, required: false
  private _resourceUrl?: string; 
  public get resourceUrl() {
    return this.getStringAttribute('resource_url');
  }
  public set resourceUrl(value: string) {
    this._resourceUrl = value;
  }
  public resetResourceUrl() {
    this._resourceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUrlInput() {
    return this._resourceUrl;
  }

  // rest_interface - computed: true, optional: true, required: false
  private _restInterface?: string; 
  public get restInterface() {
    return this.getStringAttribute('rest_interface');
  }
  public set restInterface(value: string) {
    this._restInterface = value;
  }
  public resetRestInterface() {
    this._restInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restInterfaceInput() {
    return this._restInterface;
  }

  // rest_password - computed: true, optional: true, required: false
  private _restPassword?: string[]; 
  public get restPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('rest_password'));
  }
  public set restPassword(value: string[]) {
    this._restPassword = value;
  }
  public resetRestPassword() {
    this._restPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restPasswordInput() {
    return this._restPassword;
  }

  // rest_sport - computed: true, optional: true, required: false
  private _restSport?: number; 
  public get restSport() {
    return this.getNumberAttribute('rest_sport');
  }
  public set restSport(value: number) {
    this._restSport = value;
  }
  public resetRestSport() {
    this._restSport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restSportInput() {
    return this._restSport;
  }

  // rest_ssl - computed: true, optional: true, required: false
  private _restSsl?: string; 
  public get restSsl() {
    return this.getStringAttribute('rest_ssl');
  }
  public set restSsl(value: string) {
    this._restSsl = value;
  }
  public resetRestSsl() {
    this._restSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restSslInput() {
    return this._restSsl;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // secret_key - computed: true, optional: true, required: false
  private _secretKey?: string[]; 
  public get secretKey() {
    return cdktf.Fn.tolist(this.getListAttribute('secret_key'));
  }
  public set secretKey(value: string[]) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secret_token - computed: false, optional: true, required: false
  private _secretToken?: string; 
  public get secretToken() {
    return this.getStringAttribute('secret_token');
  }
  public set secretToken(value: string) {
    this._secretToken = value;
  }
  public resetSecretToken() {
    this._secretToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTokenInput() {
    return this._secretToken;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // server_ca_cert - computed: false, optional: true, required: false
  private _serverCaCert?: string; 
  public get serverCaCert() {
    return this.getStringAttribute('server_ca_cert');
  }
  public set serverCaCert(value: string) {
    this._serverCaCert = value;
  }
  public resetServerCaCert() {
    this._serverCaCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCaCertInput() {
    return this._serverCaCert;
  }

  // server_cert - computed: false, optional: true, required: false
  private _serverCert?: string; 
  public get serverCert() {
    return this.getStringAttribute('server_cert');
  }
  public set serverCert(value: string) {
    this._serverCert = value;
  }
  public resetServerCert() {
    this._serverCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertInput() {
    return this._serverCert;
  }

  // server_list - computed: true, optional: true, required: false
  private _serverList?: string[]; 
  public get serverList() {
    return cdktf.Fn.tolist(this.getListAttribute('server_list'));
  }
  public set serverList(value: string[]) {
    this._serverList = value;
  }
  public resetServerList() {
    this._serverList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverListInput() {
    return this._serverList;
  }

  // server_port - computed: false, optional: true, required: false
  private _serverPort?: number; 
  public get serverPort() {
    return this.getNumberAttribute('server_port');
  }
  public set serverPort(value: number) {
    this._serverPort = value;
  }
  public resetServerPort() {
    this._serverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPortInput() {
    return this._serverPort;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_interval - computed: true, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }

  // updating - computed: false, optional: true, required: false
  private _updating?: number; 
  public get updating() {
    return this.getNumberAttribute('updating');
  }
  public set updating(value: number) {
    this._updating = value;
  }
  public resetUpdating() {
    this._updating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatingInput() {
    return this._updating;
  }

  // use_metadata_iam - computed: false, optional: true, required: false
  private _useMetadataIam?: string; 
  public get useMetadataIam() {
    return this.getStringAttribute('use_metadata_iam');
  }
  public set useMetadataIam(value: string) {
    this._useMetadataIam = value;
  }
  public resetUseMetadataIam() {
    this._useMetadataIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMetadataIamInput() {
    return this._useMetadataIam;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vcenter_password - computed: true, optional: true, required: false
  private _vcenterPassword?: string[]; 
  public get vcenterPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('vcenter_password'));
  }
  public set vcenterPassword(value: string[]) {
    this._vcenterPassword = value;
  }
  public resetVcenterPassword() {
    this._vcenterPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterPasswordInput() {
    return this._vcenterPassword;
  }

  // vcenter_server - computed: false, optional: true, required: false
  private _vcenterServer?: string; 
  public get vcenterServer() {
    return this.getStringAttribute('vcenter_server');
  }
  public set vcenterServer(value: string) {
    this._vcenterServer = value;
  }
  public resetVcenterServer() {
    this._vcenterServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterServerInput() {
    return this._vcenterServer;
  }

  // vcenter_username - computed: false, optional: true, required: false
  private _vcenterUsername?: string; 
  public get vcenterUsername() {
    return this.getStringAttribute('vcenter_username');
  }
  public set vcenterUsername(value: string) {
    this._vcenterUsername = value;
  }
  public resetVcenterUsername() {
    this._vcenterUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterUsernameInput() {
    return this._vcenterUsername;
  }

  // verify_certificate - computed: true, optional: true, required: false
  private _verifyCertificate?: string; 
  public get verifyCertificate() {
    return this.getStringAttribute('verify_certificate');
  }
  public set verifyCertificate(value: string) {
    this._verifyCertificate = value;
  }
  public resetVerifyCertificate() {
    this._verifyCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyCertificateInput() {
    return this._verifyCertificate;
  }

  // vmx_image_url - computed: false, optional: true, required: false
  private _vmxImageUrl?: string; 
  public get vmxImageUrl() {
    return this.getStringAttribute('vmx_image_url');
  }
  public set vmxImageUrl(value: string) {
    this._vmxImageUrl = value;
  }
  public resetVmxImageUrl() {
    this._vmxImageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmxImageUrlInput() {
    return this._vmxImageUrl;
  }

  // vmx_service_name - computed: false, optional: true, required: false
  private _vmxServiceName?: string; 
  public get vmxServiceName() {
    return this.getStringAttribute('vmx_service_name');
  }
  public set vmxServiceName(value: string) {
    this._vmxServiceName = value;
  }
  public resetVmxServiceName() {
    this._vmxServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmxServiceNameInput() {
    return this._vmxServiceName;
  }

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // compartment_list - computed: false, optional: true, required: false
  private _compartmentList = new ObjectSystemSdnconnectorCompartmentListStructList(this, "compartment_list", false);
  public get compartmentList() {
    return this._compartmentList;
  }
  public putCompartmentList(value: ObjectSystemSdnconnectorCompartmentListStruct[] | cdktf.IResolvable) {
    this._compartmentList.internalValue = value;
  }
  public resetCompartmentList() {
    this._compartmentList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentListInput() {
    return this._compartmentList.internalValue;
  }

  // external_account_list - computed: false, optional: true, required: false
  private _externalAccountList = new ObjectSystemSdnconnectorExternalAccountListStructList(this, "external_account_list", false);
  public get externalAccountList() {
    return this._externalAccountList;
  }
  public putExternalAccountList(value: ObjectSystemSdnconnectorExternalAccountListStruct[] | cdktf.IResolvable) {
    this._externalAccountList.internalValue = value;
  }
  public resetExternalAccountList() {
    this._externalAccountList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAccountListInput() {
    return this._externalAccountList.internalValue;
  }

  // external_ip - computed: false, optional: true, required: false
  private _externalIp = new ObjectSystemSdnconnectorExternalIpList(this, "external_ip", false);
  public get externalIp() {
    return this._externalIp;
  }
  public putExternalIp(value: ObjectSystemSdnconnectorExternalIp[] | cdktf.IResolvable) {
    this._externalIp.internalValue = value;
  }
  public resetExternalIp() {
    this._externalIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp.internalValue;
  }

  // forwarding_rule - computed: false, optional: true, required: false
  private _forwardingRule = new ObjectSystemSdnconnectorForwardingRuleList(this, "forwarding_rule", false);
  public get forwardingRule() {
    return this._forwardingRule;
  }
  public putForwardingRule(value: ObjectSystemSdnconnectorForwardingRule[] | cdktf.IResolvable) {
    this._forwardingRule.internalValue = value;
  }
  public resetForwardingRule() {
    this._forwardingRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardingRuleInput() {
    return this._forwardingRule.internalValue;
  }

  // gcp_project_list - computed: false, optional: true, required: false
  private _gcpProjectList = new ObjectSystemSdnconnectorGcpProjectListStructList(this, "gcp_project_list", false);
  public get gcpProjectList() {
    return this._gcpProjectList;
  }
  public putGcpProjectList(value: ObjectSystemSdnconnectorGcpProjectListStruct[] | cdktf.IResolvable) {
    this._gcpProjectList.internalValue = value;
  }
  public resetGcpProjectList() {
    this._gcpProjectList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectListInput() {
    return this._gcpProjectList.internalValue;
  }

  // nic - computed: false, optional: true, required: false
  private _nic = new ObjectSystemSdnconnectorNicList(this, "nic", false);
  public get nic() {
    return this._nic;
  }
  public putNic(value: ObjectSystemSdnconnectorNic[] | cdktf.IResolvable) {
    this._nic.internalValue = value;
  }
  public resetNic() {
    this._nic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicInput() {
    return this._nic.internalValue;
  }

  // oci_region_list - computed: false, optional: true, required: false
  private _ociRegionList = new ObjectSystemSdnconnectorOciRegionListStructList(this, "oci_region_list", false);
  public get ociRegionList() {
    return this._ociRegionList;
  }
  public putOciRegionList(value: ObjectSystemSdnconnectorOciRegionListStruct[] | cdktf.IResolvable) {
    this._ociRegionList.internalValue = value;
  }
  public resetOciRegionList() {
    this._ociRegionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ociRegionListInput() {
    return this._ociRegionList.internalValue;
  }

  // route - computed: false, optional: true, required: false
  private _route = new ObjectSystemSdnconnectorRouteList(this, "route", false);
  public get route() {
    return this._route;
  }
  public putRoute(value: ObjectSystemSdnconnectorRoute[] | cdktf.IResolvable) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // route_table - computed: false, optional: true, required: false
  private _routeTable = new ObjectSystemSdnconnectorRouteTableList(this, "route_table", false);
  public get routeTable() {
    return this._routeTable;
  }
  public putRouteTable(value: ObjectSystemSdnconnectorRouteTable[] | cdktf.IResolvable) {
    this._routeTable.internalValue = value;
  }
  public resetRouteTable() {
    this._routeTable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableInput() {
    return this._routeTable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      _local_cert: cdktf.stringToTerraform(this._localCert),
      access_key: cdktf.stringToTerraform(this._accessKey),
      adom: cdktf.stringToTerraform(this._adom),
      alt_resource_ip: cdktf.stringToTerraform(this._altResourceIp),
      api_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiKey),
      azure_region: cdktf.stringToTerraform(this._azureRegion),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientSecret),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compute_generation: cdktf.numberToTerraform(this._computeGeneration),
      domain: cdktf.stringToTerraform(this._domain),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      gcp_project: cdktf.stringToTerraform(this._gcpProject),
      group_name: cdktf.stringToTerraform(this._groupName),
      ha_status: cdktf.stringToTerraform(this._haStatus),
      ibm_region: cdktf.stringToTerraform(this._ibmRegion),
      ibm_region_gen1: cdktf.stringToTerraform(this._ibmRegionGen1),
      ibm_region_gen2: cdktf.stringToTerraform(this._ibmRegionGen2),
      id: cdktf.stringToTerraform(this._id),
      key_passwd: cdktf.listMapper(cdktf.stringToTerraform, false)(this._keyPasswd),
      last_update: cdktf.numberToTerraform(this._lastUpdate),
      login_endpoint: cdktf.stringToTerraform(this._loginEndpoint),
      message_server_port: cdktf.numberToTerraform(this._messageServerPort),
      name: cdktf.stringToTerraform(this._name),
      nsx_cert_fingerprint: cdktf.stringToTerraform(this._nsxCertFingerprint),
      oci_cert: cdktf.stringToTerraform(this._ociCert),
      oci_fingerprint: cdktf.stringToTerraform(this._ociFingerprint),
      oci_region: cdktf.stringToTerraform(this._ociRegion),
      oci_region_type: cdktf.stringToTerraform(this._ociRegionType),
      password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      proxy: cdktf.stringToTerraform(this._proxy),
      region: cdktf.stringToTerraform(this._region),
      resource_group: cdktf.stringToTerraform(this._resourceGroup),
      resource_url: cdktf.stringToTerraform(this._resourceUrl),
      rest_interface: cdktf.stringToTerraform(this._restInterface),
      rest_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restPassword),
      rest_sport: cdktf.numberToTerraform(this._restSport),
      rest_ssl: cdktf.stringToTerraform(this._restSsl),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      secret_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secretKey),
      secret_token: cdktf.stringToTerraform(this._secretToken),
      server: cdktf.stringToTerraform(this._server),
      server_ca_cert: cdktf.stringToTerraform(this._serverCaCert),
      server_cert: cdktf.stringToTerraform(this._serverCert),
      server_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverList),
      server_port: cdktf.numberToTerraform(this._serverPort),
      service_account: cdktf.stringToTerraform(this._serviceAccount),
      status: cdktf.stringToTerraform(this._status),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      type: cdktf.stringToTerraform(this._type),
      update_interval: cdktf.numberToTerraform(this._updateInterval),
      updating: cdktf.numberToTerraform(this._updating),
      use_metadata_iam: cdktf.stringToTerraform(this._useMetadataIam),
      user_id: cdktf.stringToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
      vcenter_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vcenterPassword),
      vcenter_server: cdktf.stringToTerraform(this._vcenterServer),
      vcenter_username: cdktf.stringToTerraform(this._vcenterUsername),
      verify_certificate: cdktf.stringToTerraform(this._verifyCertificate),
      vmx_image_url: cdktf.stringToTerraform(this._vmxImageUrl),
      vmx_service_name: cdktf.stringToTerraform(this._vmxServiceName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      compartment_list: cdktf.listMapper(objectSystemSdnconnectorCompartmentListStructToTerraform, true)(this._compartmentList.internalValue),
      external_account_list: cdktf.listMapper(objectSystemSdnconnectorExternalAccountListStructToTerraform, true)(this._externalAccountList.internalValue),
      external_ip: cdktf.listMapper(objectSystemSdnconnectorExternalIpToTerraform, true)(this._externalIp.internalValue),
      forwarding_rule: cdktf.listMapper(objectSystemSdnconnectorForwardingRuleToTerraform, true)(this._forwardingRule.internalValue),
      gcp_project_list: cdktf.listMapper(objectSystemSdnconnectorGcpProjectListStructToTerraform, true)(this._gcpProjectList.internalValue),
      nic: cdktf.listMapper(objectSystemSdnconnectorNicToTerraform, true)(this._nic.internalValue),
      oci_region_list: cdktf.listMapper(objectSystemSdnconnectorOciRegionListStructToTerraform, true)(this._ociRegionList.internalValue),
      route: cdktf.listMapper(objectSystemSdnconnectorRouteToTerraform, true)(this._route.internalValue),
      route_table: cdktf.listMapper(objectSystemSdnconnectorRouteTableToTerraform, true)(this._routeTable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      _local_cert: {
        value: cdktf.stringToHclTerraform(this._localCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alt_resource_ip: {
        value: cdktf.stringToHclTerraform(this._altResourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      azure_region: {
        value: cdktf.stringToHclTerraform(this._azureRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientSecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compute_generation: {
        value: cdktf.numberToHclTerraform(this._computeGeneration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project: {
        value: cdktf.stringToHclTerraform(this._gcpProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_status: {
        value: cdktf.stringToHclTerraform(this._haStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibm_region: {
        value: cdktf.stringToHclTerraform(this._ibmRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibm_region_gen1: {
        value: cdktf.stringToHclTerraform(this._ibmRegionGen1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ibm_region_gen2: {
        value: cdktf.stringToHclTerraform(this._ibmRegionGen2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_passwd: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._keyPasswd),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      last_update: {
        value: cdktf.numberToHclTerraform(this._lastUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      login_endpoint: {
        value: cdktf.stringToHclTerraform(this._loginEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_server_port: {
        value: cdktf.numberToHclTerraform(this._messageServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nsx_cert_fingerprint: {
        value: cdktf.stringToHclTerraform(this._nsxCertFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_cert: {
        value: cdktf.stringToHclTerraform(this._ociCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_fingerprint: {
        value: cdktf.stringToHclTerraform(this._ociFingerprint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_region: {
        value: cdktf.stringToHclTerraform(this._ociRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oci_region_type: {
        value: cdktf.stringToHclTerraform(this._ociRegionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._password),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group: {
        value: cdktf.stringToHclTerraform(this._resourceGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_url: {
        value: cdktf.stringToHclTerraform(this._resourceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_interface: {
        value: cdktf.stringToHclTerraform(this._restInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rest_sport: {
        value: cdktf.numberToHclTerraform(this._restSport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rest_ssl: {
        value: cdktf.stringToHclTerraform(this._restSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secretKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      secret_token: {
        value: cdktf.stringToHclTerraform(this._secretToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_ca_cert: {
        value: cdktf.stringToHclTerraform(this._serverCaCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_cert: {
        value: cdktf.stringToHclTerraform(this._serverCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      server_port: {
        value: cdktf.numberToHclTerraform(this._serverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_account: {
        value: cdktf.stringToHclTerraform(this._serviceAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_interval: {
        value: cdktf.numberToHclTerraform(this._updateInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      updating: {
        value: cdktf.numberToHclTerraform(this._updating),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_metadata_iam: {
        value: cdktf.stringToHclTerraform(this._useMetadataIam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vcenterPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vcenter_server: {
        value: cdktf.stringToHclTerraform(this._vcenterServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vcenter_username: {
        value: cdktf.stringToHclTerraform(this._vcenterUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_certificate: {
        value: cdktf.stringToHclTerraform(this._verifyCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmx_image_url: {
        value: cdktf.stringToHclTerraform(this._vmxImageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vmx_service_name: {
        value: cdktf.stringToHclTerraform(this._vmxServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_list: {
        value: cdktf.listMapperHcl(objectSystemSdnconnectorCompartmentListStructToHclTerraform, true)(this._compartmentList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemSdnconnectorCompartmentListStructList",
      },
      external_account_list: {
        value: cdktf.listMapperHcl(objectSystemSdnconnectorExternalAccountListStructToHclTerraform, true)(this._externalAccountList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemSdnconnectorExternalAccountListStructList",
      },
      external_ip: {
        value: cdktf.listMapperHcl(objectSystemSdnconnectorExternalIpToHclTerraform, true)(this._externalIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemSdnconnectorExternalIpList",
      },
      forwarding_rule: {
        value: cdktf.listMapperHcl(objectSystemSdnconnectorForwardingRuleToHclTerraform, true)(this._forwardingRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemSdnconnectorForwardingRuleList",
      },
      gcp_project_list: {
        value: cdktf.listMapperHcl(objectSystemSdnconnectorGcpProjectListStructToHclTerraform, true)(this._gcpProjectList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemSdnconnectorGcpProjectListStructList",
      },
      nic: {
        value: cdktf.listMapperHcl(objectSystemSdnconnectorNicToHclTerraform, true)(this._nic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemSdnconnectorNicList",
      },
      oci_region_list: {
        value: cdktf.listMapperHcl(objectSystemSdnconnectorOciRegionListStructToHclTerraform, true)(this._ociRegionList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemSdnconnectorOciRegionListStructList",
      },
      route: {
        value: cdktf.listMapperHcl(objectSystemSdnconnectorRouteToHclTerraform, true)(this._route.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemSdnconnectorRouteList",
      },
      route_table: {
        value: cdktf.listMapperHcl(objectSystemSdnconnectorRouteTableToHclTerraform, true)(this._routeTable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectSystemSdnconnectorRouteTableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
