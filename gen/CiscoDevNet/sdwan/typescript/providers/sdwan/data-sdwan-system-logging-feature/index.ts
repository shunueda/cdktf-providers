// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_logging_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanSystemLoggingFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_logging_feature#feature_profile_id DataSdwanSystemLoggingFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_logging_feature#id DataSdwanSystemLoggingFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanSystemLoggingFeatureIpv4Servers {
}

export function dataSdwanSystemLoggingFeatureIpv4ServersToTerraform(struct?: DataSdwanSystemLoggingFeatureIpv4Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSystemLoggingFeatureIpv4ServersToHclTerraform(struct?: DataSdwanSystemLoggingFeatureIpv4Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSystemLoggingFeatureIpv4ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSystemLoggingFeatureIpv4Servers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSystemLoggingFeatureIpv4Servers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname_ip - computed: true, optional: false, required: false
  public get hostnameIp() {
    return this.getStringAttribute('hostname_ip');
  }

  // hostname_ip_variable - computed: true, optional: false, required: false
  public get hostnameIpVariable() {
    return this.getStringAttribute('hostname_ip_variable');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // priority_variable - computed: true, optional: false, required: false
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interface_variable - computed: true, optional: false, required: false
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }

  // tls_enable - computed: true, optional: false, required: false
  public get tlsEnable() {
    return this.getBooleanAttribute('tls_enable');
  }

  // tls_enable_variable - computed: true, optional: false, required: false
  public get tlsEnableVariable() {
    return this.getStringAttribute('tls_enable_variable');
  }

  // tls_properties_custom_profile - computed: true, optional: false, required: false
  public get tlsPropertiesCustomProfile() {
    return this.getBooleanAttribute('tls_properties_custom_profile');
  }

  // tls_properties_custom_profile_variable - computed: true, optional: false, required: false
  public get tlsPropertiesCustomProfileVariable() {
    return this.getStringAttribute('tls_properties_custom_profile_variable');
  }

  // tls_properties_profile - computed: true, optional: false, required: false
  public get tlsPropertiesProfile() {
    return this.getStringAttribute('tls_properties_profile');
  }

  // tls_properties_profile_variable - computed: true, optional: false, required: false
  public get tlsPropertiesProfileVariable() {
    return this.getStringAttribute('tls_properties_profile_variable');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }

  // vpn_variable - computed: true, optional: false, required: false
  public get vpnVariable() {
    return this.getStringAttribute('vpn_variable');
  }
}

export class DataSdwanSystemLoggingFeatureIpv4ServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSystemLoggingFeatureIpv4ServersOutputReference {
    return new DataSdwanSystemLoggingFeatureIpv4ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanSystemLoggingFeatureIpv6Servers {
}

export function dataSdwanSystemLoggingFeatureIpv6ServersToTerraform(struct?: DataSdwanSystemLoggingFeatureIpv6Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSystemLoggingFeatureIpv6ServersToHclTerraform(struct?: DataSdwanSystemLoggingFeatureIpv6Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSystemLoggingFeatureIpv6ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSystemLoggingFeatureIpv6Servers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSystemLoggingFeatureIpv6Servers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname_ip - computed: true, optional: false, required: false
  public get hostnameIp() {
    return this.getStringAttribute('hostname_ip');
  }

  // hostname_ip_variable - computed: true, optional: false, required: false
  public get hostnameIpVariable() {
    return this.getStringAttribute('hostname_ip_variable');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // priority_variable - computed: true, optional: false, required: false
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interface_variable - computed: true, optional: false, required: false
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }

  // tls_enable - computed: true, optional: false, required: false
  public get tlsEnable() {
    return this.getBooleanAttribute('tls_enable');
  }

  // tls_enable_variable - computed: true, optional: false, required: false
  public get tlsEnableVariable() {
    return this.getStringAttribute('tls_enable_variable');
  }

  // tls_properties_custom_profile - computed: true, optional: false, required: false
  public get tlsPropertiesCustomProfile() {
    return this.getBooleanAttribute('tls_properties_custom_profile');
  }

  // tls_properties_custom_profile_variable - computed: true, optional: false, required: false
  public get tlsPropertiesCustomProfileVariable() {
    return this.getStringAttribute('tls_properties_custom_profile_variable');
  }

  // tls_properties_profile - computed: true, optional: false, required: false
  public get tlsPropertiesProfile() {
    return this.getStringAttribute('tls_properties_profile');
  }

  // tls_properties_profile_variable - computed: true, optional: false, required: false
  public get tlsPropertiesProfileVariable() {
    return this.getStringAttribute('tls_properties_profile_variable');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getNumberAttribute('vpn');
  }

  // vpn_variable - computed: true, optional: false, required: false
  public get vpnVariable() {
    return this.getStringAttribute('vpn_variable');
  }
}

export class DataSdwanSystemLoggingFeatureIpv6ServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSystemLoggingFeatureIpv6ServersOutputReference {
    return new DataSdwanSystemLoggingFeatureIpv6ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanSystemLoggingFeatureTlsProfiles {
}

export function dataSdwanSystemLoggingFeatureTlsProfilesToTerraform(struct?: DataSdwanSystemLoggingFeatureTlsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSystemLoggingFeatureTlsProfilesToHclTerraform(struct?: DataSdwanSystemLoggingFeatureTlsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSystemLoggingFeatureTlsProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSystemLoggingFeatureTlsProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSystemLoggingFeatureTlsProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cipher_suites - computed: true, optional: false, required: false
  public get cipherSuites() {
    return cdktf.Fn.tolist(this.getListAttribute('cipher_suites'));
  }

  // cipher_suites_variable - computed: true, optional: false, required: false
  public get cipherSuitesVariable() {
    return this.getStringAttribute('cipher_suites_variable');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // profile_variable - computed: true, optional: false, required: false
  public get profileVariable() {
    return this.getStringAttribute('profile_variable');
  }

  // tls_version - computed: true, optional: false, required: false
  public get tlsVersion() {
    return this.getStringAttribute('tls_version');
  }

  // tls_version_variable - computed: true, optional: false, required: false
  public get tlsVersionVariable() {
    return this.getStringAttribute('tls_version_variable');
  }
}

export class DataSdwanSystemLoggingFeatureTlsProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSystemLoggingFeatureTlsProfilesOutputReference {
    return new DataSdwanSystemLoggingFeatureTlsProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_logging_feature sdwan_system_logging_feature}
*/
export class DataSdwanSystemLoggingFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_logging_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanSystemLoggingFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanSystemLoggingFeature to import
  * @param importFromId The id of the existing DataSdwanSystemLoggingFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_logging_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanSystemLoggingFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_logging_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_logging_feature sdwan_system_logging_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanSystemLoggingFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanSystemLoggingFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_logging_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // disk_enable - computed: true, optional: false, required: false
  public get diskEnable() {
    return this.getBooleanAttribute('disk_enable');
  }

  // disk_enable_variable - computed: true, optional: false, required: false
  public get diskEnableVariable() {
    return this.getStringAttribute('disk_enable_variable');
  }

  // disk_file_rotate - computed: true, optional: false, required: false
  public get diskFileRotate() {
    return this.getNumberAttribute('disk_file_rotate');
  }

  // disk_file_rotate_variable - computed: true, optional: false, required: false
  public get diskFileRotateVariable() {
    return this.getStringAttribute('disk_file_rotate_variable');
  }

  // disk_file_size - computed: true, optional: false, required: false
  public get diskFileSize() {
    return this.getNumberAttribute('disk_file_size');
  }

  // disk_file_size_variable - computed: true, optional: false, required: false
  public get diskFileSizeVariable() {
    return this.getStringAttribute('disk_file_size_variable');
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

  // ipv4_servers - computed: true, optional: false, required: false
  private _ipv4Servers = new DataSdwanSystemLoggingFeatureIpv4ServersList(this, "ipv4_servers", false);
  public get ipv4Servers() {
    return this._ipv4Servers;
  }

  // ipv6_servers - computed: true, optional: false, required: false
  private _ipv6Servers = new DataSdwanSystemLoggingFeatureIpv6ServersList(this, "ipv6_servers", false);
  public get ipv6Servers() {
    return this._ipv6Servers;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tls_profiles - computed: true, optional: false, required: false
  private _tlsProfiles = new DataSdwanSystemLoggingFeatureTlsProfilesList(this, "tls_profiles", false);
  public get tlsProfiles() {
    return this._tlsProfiles;
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
