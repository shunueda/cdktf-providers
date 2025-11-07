// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_wireless_lan_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanServiceWirelessLanFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_wireless_lan_feature#feature_profile_id DataSdwanServiceWirelessLanFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_wireless_lan_feature#id DataSdwanServiceWirelessLanFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanServiceWirelessLanFeatureSsids {
}

export function dataSdwanServiceWirelessLanFeatureSsidsToTerraform(struct?: DataSdwanServiceWirelessLanFeatureSsids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanServiceWirelessLanFeatureSsidsToHclTerraform(struct?: DataSdwanServiceWirelessLanFeatureSsids): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanServiceWirelessLanFeatureSsidsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataSdwanServiceWirelessLanFeatureSsids | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanServiceWirelessLanFeatureSsids | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_state - computed: true, optional: false, required: false
  public get adminState() {
    return this.getBooleanAttribute('admin_state');
  }

  // admin_state_variable - computed: true, optional: false, required: false
  public get adminStateVariable() {
    return this.getStringAttribute('admin_state_variable');
  }

  // broadcast_ssid - computed: true, optional: false, required: false
  public get broadcastSsid() {
    return this.getBooleanAttribute('broadcast_ssid');
  }

  // broadcast_ssid_variable - computed: true, optional: false, required: false
  public get broadcastSsidVariable() {
    return this.getStringAttribute('broadcast_ssid_variable');
  }

  // passphrase - computed: true, optional: false, required: false
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }

  // passphrase_variable - computed: true, optional: false, required: false
  public get passphraseVariable() {
    return this.getStringAttribute('passphrase_variable');
  }

  // qos_profile - computed: true, optional: false, required: false
  public get qosProfile() {
    return this.getStringAttribute('qos_profile');
  }

  // qos_profile_variable - computed: true, optional: false, required: false
  public get qosProfileVariable() {
    return this.getStringAttribute('qos_profile_variable');
  }

  // radio_type - computed: true, optional: false, required: false
  public get radioType() {
    return this.getStringAttribute('radio_type');
  }

  // radio_type_variable - computed: true, optional: false, required: false
  public get radioTypeVariable() {
    return this.getStringAttribute('radio_type_variable');
  }

  // radius_server_ip - computed: true, optional: false, required: false
  public get radiusServerIp() {
    return this.getStringAttribute('radius_server_ip');
  }

  // radius_server_ip_variable - computed: true, optional: false, required: false
  public get radiusServerIpVariable() {
    return this.getStringAttribute('radius_server_ip_variable');
  }

  // radius_server_port - computed: true, optional: false, required: false
  public get radiusServerPort() {
    return this.getNumberAttribute('radius_server_port');
  }

  // radius_server_port_variable - computed: true, optional: false, required: false
  public get radiusServerPortVariable() {
    return this.getStringAttribute('radius_server_port_variable');
  }

  // radius_server_secret - computed: true, optional: false, required: false
  public get radiusServerSecret() {
    return this.getStringAttribute('radius_server_secret');
  }

  // radius_server_secret_variable - computed: true, optional: false, required: false
  public get radiusServerSecretVariable() {
    return this.getStringAttribute('radius_server_secret_variable');
  }

  // security_type - computed: true, optional: false, required: false
  public get securityType() {
    return this.getStringAttribute('security_type');
  }

  // ssid_name - computed: true, optional: false, required: false
  public get ssidName() {
    return this.getStringAttribute('ssid_name');
  }

  // vlan_id - computed: true, optional: false, required: false
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }

  // vlan_id_variable - computed: true, optional: false, required: false
  public get vlanIdVariable() {
    return this.getStringAttribute('vlan_id_variable');
  }
}

export class DataSdwanServiceWirelessLanFeatureSsidsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanServiceWirelessLanFeatureSsidsOutputReference {
    return new DataSdwanServiceWirelessLanFeatureSsidsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_wireless_lan_feature sdwan_service_wireless_lan_feature}
*/
export class DataSdwanServiceWirelessLanFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_wireless_lan_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanServiceWirelessLanFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanServiceWirelessLanFeature to import
  * @param importFromId The id of the existing DataSdwanServiceWirelessLanFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_wireless_lan_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanServiceWirelessLanFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_wireless_lan_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/service_wireless_lan_feature sdwan_service_wireless_lan_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanServiceWirelessLanFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanServiceWirelessLanFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_wireless_lan_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // country - computed: true, optional: false, required: false
  public get country() {
    return this.getStringAttribute('country');
  }

  // country_variable - computed: true, optional: false, required: false
  public get countryVariable() {
    return this.getStringAttribute('country_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enable_24g - computed: true, optional: false, required: false
  public get enable24G() {
    return this.getBooleanAttribute('enable_24g');
  }

  // enable_24g_variable - computed: true, optional: false, required: false
  public get enable24GVariable() {
    return this.getStringAttribute('enable_24g_variable');
  }

  // enable_5g - computed: true, optional: false, required: false
  public get enable5G() {
    return this.getBooleanAttribute('enable_5g');
  }

  // enable_5g_variable - computed: true, optional: false, required: false
  public get enable5GVariable() {
    return this.getStringAttribute('enable_5g_variable');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // me_default_gateway - computed: true, optional: false, required: false
  public get meDefaultGateway() {
    return this.getStringAttribute('me_default_gateway');
  }

  // me_default_gateway_variable - computed: true, optional: false, required: false
  public get meDefaultGatewayVariable() {
    return this.getStringAttribute('me_default_gateway_variable');
  }

  // me_dynamic_ip_enabled - computed: true, optional: false, required: false
  public get meDynamicIpEnabled() {
    return this.getBooleanAttribute('me_dynamic_ip_enabled');
  }

  // me_ipv4_address - computed: true, optional: false, required: false
  public get meIpv4Address() {
    return this.getStringAttribute('me_ipv4_address');
  }

  // me_ipv4_address_variable - computed: true, optional: false, required: false
  public get meIpv4AddressVariable() {
    return this.getStringAttribute('me_ipv4_address_variable');
  }

  // me_subnet_mask - computed: true, optional: false, required: false
  public get meSubnetMask() {
    return this.getStringAttribute('me_subnet_mask');
  }

  // me_subnet_mask_variable - computed: true, optional: false, required: false
  public get meSubnetMaskVariable() {
    return this.getStringAttribute('me_subnet_mask_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // password_variable - computed: true, optional: false, required: false
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }

  // ssids - computed: true, optional: false, required: false
  private _ssids = new DataSdwanServiceWirelessLanFeatureSsidsList(this, "ssids", false);
  public get ssids() {
    return this._ssids;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // username_variable - computed: true, optional: false, required: false
  public get usernameVariable() {
    return this.getStringAttribute('username_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
