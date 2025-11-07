// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_csf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemCsfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_csf#id DataFortiosSystemCsf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_csf#vdomparam DataFortiosSystemCsf#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemCsfFabricConnectorVdom {
}

export function dataFortiosSystemCsfFabricConnectorVdomToTerraform(struct?: DataFortiosSystemCsfFabricConnectorVdom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemCsfFabricConnectorVdomToHclTerraform(struct?: DataFortiosSystemCsfFabricConnectorVdom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemCsfFabricConnectorVdomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemCsfFabricConnectorVdom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemCsfFabricConnectorVdom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosSystemCsfFabricConnectorVdomList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemCsfFabricConnectorVdomOutputReference {
    return new DataFortiosSystemCsfFabricConnectorVdomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemCsfFabricConnector {
}

export function dataFortiosSystemCsfFabricConnectorToTerraform(struct?: DataFortiosSystemCsfFabricConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemCsfFabricConnectorToHclTerraform(struct?: DataFortiosSystemCsfFabricConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemCsfFabricConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemCsfFabricConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemCsfFabricConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accprofile - computed: true, optional: false, required: false
  public get accprofile() {
    return this.getStringAttribute('accprofile');
  }

  // configuration_write_access - computed: true, optional: false, required: false
  public get configurationWriteAccess() {
    return this.getStringAttribute('configuration_write_access');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }

  // vdom - computed: true, optional: false, required: false
  private _vdom = new DataFortiosSystemCsfFabricConnectorVdomList(this, "vdom", false);
  public get vdom() {
    return this._vdom;
  }
}

export class DataFortiosSystemCsfFabricConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemCsfFabricConnectorOutputReference {
    return new DataFortiosSystemCsfFabricConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemCsfFabricDevice {
}

export function dataFortiosSystemCsfFabricDeviceToTerraform(struct?: DataFortiosSystemCsfFabricDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemCsfFabricDeviceToHclTerraform(struct?: DataFortiosSystemCsfFabricDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemCsfFabricDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemCsfFabricDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemCsfFabricDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // device_ip - computed: true, optional: false, required: false
  public get deviceIp() {
    return this.getStringAttribute('device_ip');
  }

  // device_type - computed: true, optional: false, required: false
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // login - computed: true, optional: false, required: false
  public get login() {
    return this.getStringAttribute('login');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }
}

export class DataFortiosSystemCsfFabricDeviceList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemCsfFabricDeviceOutputReference {
    return new DataFortiosSystemCsfFabricDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemCsfTrustedListStruct {
}

export function dataFortiosSystemCsfTrustedListStructToTerraform(struct?: DataFortiosSystemCsfTrustedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemCsfTrustedListStructToHclTerraform(struct?: DataFortiosSystemCsfTrustedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemCsfTrustedListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemCsfTrustedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemCsfTrustedListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // authorization_type - computed: true, optional: false, required: false
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // downstream_authorization - computed: true, optional: false, required: false
  public get downstreamAuthorization() {
    return this.getStringAttribute('downstream_authorization');
  }

  // ha_members - computed: true, optional: false, required: false
  public get haMembers() {
    return this.getStringAttribute('ha_members');
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // serial - computed: true, optional: false, required: false
  public get serial() {
    return this.getStringAttribute('serial');
  }
}

export class DataFortiosSystemCsfTrustedListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemCsfTrustedListStructOutputReference {
    return new DataFortiosSystemCsfTrustedListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_csf fortios_system_csf}
*/
export class DataFortiosSystemCsf extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_csf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemCsf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemCsf to import
  * @param importFromId The id of the existing DataFortiosSystemCsf that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_csf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemCsf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_csf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_csf fortios_system_csf} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemCsfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemCsfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_csf',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_auth_by_cert - computed: true, optional: false, required: false
  public get acceptAuthByCert() {
    return this.getStringAttribute('accept_auth_by_cert');
  }

  // authorization_request_type - computed: true, optional: false, required: false
  public get authorizationRequestType() {
    return this.getStringAttribute('authorization_request_type');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // configuration_sync - computed: true, optional: false, required: false
  public get configurationSync() {
    return this.getStringAttribute('configuration_sync');
  }

  // downstream_access - computed: true, optional: false, required: false
  public get downstreamAccess() {
    return this.getStringAttribute('downstream_access');
  }

  // downstream_accprofile - computed: true, optional: false, required: false
  public get downstreamAccprofile() {
    return this.getStringAttribute('downstream_accprofile');
  }

  // fabric_connector - computed: true, optional: false, required: false
  private _fabricConnector = new DataFortiosSystemCsfFabricConnectorList(this, "fabric_connector", false);
  public get fabricConnector() {
    return this._fabricConnector;
  }

  // fabric_device - computed: true, optional: false, required: false
  private _fabricDevice = new DataFortiosSystemCsfFabricDeviceList(this, "fabric_device", false);
  public get fabricDevice() {
    return this._fabricDevice;
  }

  // fabric_object_unification - computed: true, optional: false, required: false
  public get fabricObjectUnification() {
    return this.getStringAttribute('fabric_object_unification');
  }

  // fabric_workers - computed: true, optional: false, required: false
  public get fabricWorkers() {
    return this.getNumberAttribute('fabric_workers');
  }

  // file_mgmt - computed: true, optional: false, required: false
  public get fileMgmt() {
    return this.getStringAttribute('file_mgmt');
  }

  // file_quota - computed: true, optional: false, required: false
  public get fileQuota() {
    return this.getNumberAttribute('file_quota');
  }

  // file_quota_warning - computed: true, optional: false, required: false
  public get fileQuotaWarning() {
    return this.getNumberAttribute('file_quota_warning');
  }

  // fixed_key - computed: true, optional: false, required: false
  public get fixedKey() {
    return this.getStringAttribute('fixed_key');
  }

  // forticloud_account_enforcement - computed: true, optional: false, required: false
  public get forticloudAccountEnforcement() {
    return this.getStringAttribute('forticloud_account_enforcement');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // group_password - computed: true, optional: false, required: false
  public get groupPassword() {
    return this.getStringAttribute('group_password');
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

  // legacy_authentication - computed: true, optional: false, required: false
  public get legacyAuthentication() {
    return this.getStringAttribute('legacy_authentication');
  }

  // log_unification - computed: true, optional: false, required: false
  public get logUnification() {
    return this.getStringAttribute('log_unification');
  }

  // management_ip - computed: true, optional: false, required: false
  public get managementIp() {
    return this.getStringAttribute('management_ip');
  }

  // management_port - computed: true, optional: false, required: false
  public get managementPort() {
    return this.getNumberAttribute('management_port');
  }

  // saml_configuration_sync - computed: true, optional: false, required: false
  public get samlConfigurationSync() {
    return this.getStringAttribute('saml_configuration_sync');
  }

  // source_ip - computed: true, optional: false, required: false
  public get sourceIp() {
    return this.getStringAttribute('source_ip');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // trusted_list - computed: true, optional: false, required: false
  private _trustedList = new DataFortiosSystemCsfTrustedListStructList(this, "trusted_list", false);
  public get trustedList() {
    return this._trustedList;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // upstream - computed: true, optional: false, required: false
  public get upstream() {
    return this.getStringAttribute('upstream');
  }

  // upstream_interface - computed: true, optional: false, required: false
  public get upstreamInterface() {
    return this.getStringAttribute('upstream_interface');
  }

  // upstream_interface_select_method - computed: true, optional: false, required: false
  public get upstreamInterfaceSelectMethod() {
    return this.getStringAttribute('upstream_interface_select_method');
  }

  // upstream_ip - computed: true, optional: false, required: false
  public get upstreamIp() {
    return this.getStringAttribute('upstream_ip');
  }

  // upstream_port - computed: true, optional: false, required: false
  public get upstreamPort() {
    return this.getNumberAttribute('upstream_port');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
