// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_logging_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoLoggingFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_logging_feature_template#id DataSdwanCiscoLoggingFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_logging_feature_template#name DataSdwanCiscoLoggingFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoLoggingFeatureTemplateIpv4Servers {
}

export function dataSdwanCiscoLoggingFeatureTemplateIpv4ServersToTerraform(struct?: DataSdwanCiscoLoggingFeatureTemplateIpv4Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoLoggingFeatureTemplateIpv4ServersToHclTerraform(struct?: DataSdwanCiscoLoggingFeatureTemplateIpv4Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoLoggingFeatureTemplateIpv4ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoLoggingFeatureTemplateIpv4Servers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoLoggingFeatureTemplateIpv4Servers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_profile - computed: true, optional: false, required: false
  public get customProfile() {
    return this.getBooleanAttribute('custom_profile');
  }

  // custom_profile_variable - computed: true, optional: false, required: false
  public get customProfileVariable() {
    return this.getStringAttribute('custom_profile_variable');
  }

  // enable_tls - computed: true, optional: false, required: false
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }

  // enable_tls_variable - computed: true, optional: false, required: false
  public get enableTlsVariable() {
    return this.getStringAttribute('enable_tls_variable');
  }

  // hostname_ip - computed: true, optional: false, required: false
  public get hostnameIp() {
    return this.getStringAttribute('hostname_ip');
  }

  // hostname_ip_variable - computed: true, optional: false, required: false
  public get hostnameIpVariable() {
    return this.getStringAttribute('hostname_ip_variable');
  }

  // logging_level - computed: true, optional: false, required: false
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }

  // logging_level_variable - computed: true, optional: false, required: false
  public get loggingLevelVariable() {
    return this.getStringAttribute('logging_level_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // profile_variable - computed: true, optional: false, required: false
  public get profileVariable() {
    return this.getStringAttribute('profile_variable');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interface_variable - computed: true, optional: false, required: false
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_id_variable - computed: true, optional: false, required: false
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
}

export class DataSdwanCiscoLoggingFeatureTemplateIpv4ServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoLoggingFeatureTemplateIpv4ServersOutputReference {
    return new DataSdwanCiscoLoggingFeatureTemplateIpv4ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoLoggingFeatureTemplateIpv6Servers {
}

export function dataSdwanCiscoLoggingFeatureTemplateIpv6ServersToTerraform(struct?: DataSdwanCiscoLoggingFeatureTemplateIpv6Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoLoggingFeatureTemplateIpv6ServersToHclTerraform(struct?: DataSdwanCiscoLoggingFeatureTemplateIpv6Servers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoLoggingFeatureTemplateIpv6ServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoLoggingFeatureTemplateIpv6Servers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoLoggingFeatureTemplateIpv6Servers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_profile - computed: true, optional: false, required: false
  public get customProfile() {
    return this.getBooleanAttribute('custom_profile');
  }

  // custom_profile_variable - computed: true, optional: false, required: false
  public get customProfileVariable() {
    return this.getStringAttribute('custom_profile_variable');
  }

  // enable_tls - computed: true, optional: false, required: false
  public get enableTls() {
    return this.getBooleanAttribute('enable_tls');
  }

  // enable_tls_variable - computed: true, optional: false, required: false
  public get enableTlsVariable() {
    return this.getStringAttribute('enable_tls_variable');
  }

  // hostname_ip - computed: true, optional: false, required: false
  public get hostnameIp() {
    return this.getStringAttribute('hostname_ip');
  }

  // hostname_ip_variable - computed: true, optional: false, required: false
  public get hostnameIpVariable() {
    return this.getStringAttribute('hostname_ip_variable');
  }

  // logging_level - computed: true, optional: false, required: false
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }

  // logging_level_variable - computed: true, optional: false, required: false
  public get loggingLevelVariable() {
    return this.getStringAttribute('logging_level_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // profile_variable - computed: true, optional: false, required: false
  public get profileVariable() {
    return this.getStringAttribute('profile_variable');
  }

  // source_interface - computed: true, optional: false, required: false
  public get sourceInterface() {
    return this.getStringAttribute('source_interface');
  }

  // source_interface_variable - computed: true, optional: false, required: false
  public get sourceInterfaceVariable() {
    return this.getStringAttribute('source_interface_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }

  // vpn_id_variable - computed: true, optional: false, required: false
  public get vpnIdVariable() {
    return this.getStringAttribute('vpn_id_variable');
  }
}

export class DataSdwanCiscoLoggingFeatureTemplateIpv6ServersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoLoggingFeatureTemplateIpv6ServersOutputReference {
    return new DataSdwanCiscoLoggingFeatureTemplateIpv6ServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoLoggingFeatureTemplateTlsProfiles {
}

export function dataSdwanCiscoLoggingFeatureTemplateTlsProfilesToTerraform(struct?: DataSdwanCiscoLoggingFeatureTemplateTlsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoLoggingFeatureTemplateTlsProfilesToHclTerraform(struct?: DataSdwanCiscoLoggingFeatureTemplateTlsProfiles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoLoggingFeatureTemplateTlsProfilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoLoggingFeatureTemplateTlsProfiles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoLoggingFeatureTemplateTlsProfiles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authentication_type - computed: true, optional: false, required: false
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }

  // ciphersuite_list - computed: true, optional: false, required: false
  public get ciphersuiteList() {
    return cdktf.Fn.tolist(this.getListAttribute('ciphersuite_list'));
  }

  // ciphersuite_list_variable - computed: true, optional: false, required: false
  public get ciphersuiteListVariable() {
    return this.getStringAttribute('ciphersuite_list_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }

  // version_variable - computed: true, optional: false, required: false
  public get versionVariable() {
    return this.getStringAttribute('version_variable');
  }
}

export class DataSdwanCiscoLoggingFeatureTemplateTlsProfilesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoLoggingFeatureTemplateTlsProfilesOutputReference {
    return new DataSdwanCiscoLoggingFeatureTemplateTlsProfilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_logging_feature_template sdwan_cisco_logging_feature_template}
*/
export class DataSdwanCiscoLoggingFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_logging_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoLoggingFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoLoggingFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoLoggingFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_logging_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoLoggingFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_logging_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_logging_feature_template sdwan_cisco_logging_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoLoggingFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoLoggingFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_logging_feature_template',
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
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // disk_logging - computed: true, optional: false, required: false
  public get diskLogging() {
    return this.getBooleanAttribute('disk_logging');
  }

  // disk_logging_variable - computed: true, optional: false, required: false
  public get diskLoggingVariable() {
    return this.getStringAttribute('disk_logging_variable');
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

  // ipv4_servers - computed: true, optional: false, required: false
  private _ipv4Servers = new DataSdwanCiscoLoggingFeatureTemplateIpv4ServersList(this, "ipv4_servers", false);
  public get ipv4Servers() {
    return this._ipv4Servers;
  }

  // ipv6_servers - computed: true, optional: false, required: false
  private _ipv6Servers = new DataSdwanCiscoLoggingFeatureTemplateIpv6ServersList(this, "ipv6_servers", false);
  public get ipv6Servers() {
    return this._ipv6Servers;
  }

  // log_rotations - computed: true, optional: false, required: false
  public get logRotations() {
    return this.getNumberAttribute('log_rotations');
  }

  // log_rotations_variable - computed: true, optional: false, required: false
  public get logRotationsVariable() {
    return this.getStringAttribute('log_rotations_variable');
  }

  // max_size - computed: true, optional: false, required: false
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }

  // max_size_variable - computed: true, optional: false, required: false
  public get maxSizeVariable() {
    return this.getStringAttribute('max_size_variable');
  }

  // name - computed: true, optional: true, required: false
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tls_profiles - computed: true, optional: false, required: false
  private _tlsProfiles = new DataSdwanCiscoLoggingFeatureTemplateTlsProfilesList(this, "tls_profiles", false);
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
