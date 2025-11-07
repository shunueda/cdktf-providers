// https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#action Server#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#bring_your_own_license Server#bring_your_own_license}
  */
  readonly bringYourOwnLicense?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#delete_ip_blocks Server#delete_ip_blocks}
  */
  readonly deleteIpBlocks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#description Server#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#force Server#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#hostname Server#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#install_default_ssh_keys Server#install_default_ssh_keys}
  */
  readonly installDefaultSshKeys?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#install_os_to_ram Server#install_os_to_ram}
  */
  readonly installOsToRam?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#location Server#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#management_access_allowed_ips Server#management_access_allowed_ips}
  */
  readonly managementAccessAllowedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#network_type Server#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#os Server#os}
  */
  readonly os: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#pricing_model Server#pricing_model}
  */
  readonly pricingModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#rdp_allowed_ips Server#rdp_allowed_ips}
  */
  readonly rdpAllowedIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#reservation_id Server#reservation_id}
  */
  readonly reservationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#ssh_key_ids Server#ssh_key_ids}
  */
  readonly sshKeyIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#ssh_keys Server#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#transfer_reservation_to Server#transfer_reservation_to}
  */
  readonly transferReservationTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#type Server#type}
  */
  readonly type: string;
  /**
  * cloud_init block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#cloud_init Server#cloud_init}
  */
  readonly cloudInit?: ServerCloudInit;
  /**
  * esxi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#esxi Server#esxi}
  */
  readonly esxi?: ServerEsxi;
  /**
  * netris_softgate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#netris_softgate Server#netris_softgate}
  */
  readonly netrisSoftgate?: ServerNetrisSoftgate;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#network_configuration Server#network_configuration}
  */
  readonly networkConfiguration?: ServerNetworkConfiguration;
  /**
  * storage_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#storage_configuration Server#storage_configuration}
  */
  readonly storageConfiguration?: ServerStorageConfiguration;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#tags Server#tags}
  */
  readonly tags?: ServerTags[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#timeouts Server#timeouts}
  */
  readonly timeouts?: ServerTimeouts;
}
export interface ServerGpuConfiguration {
}

export function serverGpuConfigurationToTerraform(struct?: ServerGpuConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverGpuConfigurationToHclTerraform(struct?: ServerGpuConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerGpuConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerGpuConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerGpuConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // long_name - computed: true, optional: false, required: false
  public get longName() {
    return this.getStringAttribute('long_name');
  }
}

export class ServerGpuConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): ServerGpuConfigurationOutputReference {
    return new ServerGpuConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetrisController {
}

export function serverNetrisControllerToTerraform(struct?: ServerNetrisController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function serverNetrisControllerToHclTerraform(struct?: ServerNetrisController): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ServerNetrisControllerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerNetrisController | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetrisController | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host_os - computed: true, optional: false, required: false
  public get hostOs() {
    return this.getStringAttribute('host_os');
  }

  // netris_user_password - computed: true, optional: false, required: false
  public get netrisUserPassword() {
    return this.getStringAttribute('netris_user_password');
  }

  // netris_web_console_url - computed: true, optional: false, required: false
  public get netrisWebConsoleUrl() {
    return this.getStringAttribute('netris_web_console_url');
  }
}

export class ServerNetrisControllerList extends cdktf.ComplexList {

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
  public get(index: number): ServerNetrisControllerOutputReference {
    return new ServerNetrisControllerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerCloudInit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#user_data Server#user_data}
  */
  readonly userData?: string;
}

export function serverCloudInitToTerraform(struct?: ServerCloudInitOutputReference | ServerCloudInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_data: cdktf.stringToTerraform(struct!.userData),
  }
}


export function serverCloudInitToHclTerraform(struct?: ServerCloudInitOutputReference | ServerCloudInit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerCloudInitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerCloudInit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerCloudInit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userData = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userData = value.userData;
    }
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }
}
export interface ServerEsxiDatastoreConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#datastore_name Server#datastore_name}
  */
  readonly datastoreName?: string;
}

export function serverEsxiDatastoreConfigurationToTerraform(struct?: ServerEsxiDatastoreConfigurationOutputReference | ServerEsxiDatastoreConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_name: cdktf.stringToTerraform(struct!.datastoreName),
  }
}


export function serverEsxiDatastoreConfigurationToHclTerraform(struct?: ServerEsxiDatastoreConfigurationOutputReference | ServerEsxiDatastoreConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_name: {
      value: cdktf.stringToHclTerraform(struct!.datastoreName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerEsxiDatastoreConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerEsxiDatastoreConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreName = this._datastoreName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerEsxiDatastoreConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreName = value.datastoreName;
    }
  }

  // datastore_name - computed: true, optional: true, required: false
  private _datastoreName?: string; 
  public get datastoreName() {
    return this.getStringAttribute('datastore_name');
  }
  public set datastoreName(value: string) {
    this._datastoreName = value;
  }
  public resetDatastoreName() {
    this._datastoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreNameInput() {
    return this._datastoreName;
  }
}
export interface ServerEsxi {
  /**
  * datastore_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#datastore_configuration Server#datastore_configuration}
  */
  readonly datastoreConfiguration?: ServerEsxiDatastoreConfiguration;
}

export function serverEsxiToTerraform(struct?: ServerEsxiOutputReference | ServerEsxi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_configuration: serverEsxiDatastoreConfigurationToTerraform(struct!.datastoreConfiguration),
  }
}


export function serverEsxiToHclTerraform(struct?: ServerEsxiOutputReference | ServerEsxi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_configuration: {
      value: serverEsxiDatastoreConfigurationToHclTerraform(struct!.datastoreConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ServerEsxiDatastoreConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerEsxiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerEsxi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreConfiguration = this._datastoreConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerEsxi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreConfiguration.internalValue = value.datastoreConfiguration;
    }
  }

  // datastore_configuration - computed: false, optional: true, required: false
  private _datastoreConfiguration = new ServerEsxiDatastoreConfigurationOutputReference(this, "datastore_configuration");
  public get datastoreConfiguration() {
    return this._datastoreConfiguration;
  }
  public putDatastoreConfiguration(value: ServerEsxiDatastoreConfiguration) {
    this._datastoreConfiguration.internalValue = value;
  }
  public resetDatastoreConfiguration() {
    this._datastoreConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreConfigurationInput() {
    return this._datastoreConfiguration.internalValue;
  }
}
export interface ServerNetrisSoftgate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#controller_address Server#controller_address}
  */
  readonly controllerAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#controller_auth_key Server#controller_auth_key}
  */
  readonly controllerAuthKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#controller_version Server#controller_version}
  */
  readonly controllerVersion?: string;
}

export function serverNetrisSoftgateToTerraform(struct?: ServerNetrisSoftgateOutputReference | ServerNetrisSoftgate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_address: cdktf.stringToTerraform(struct!.controllerAddress),
    controller_auth_key: cdktf.stringToTerraform(struct!.controllerAuthKey),
    controller_version: cdktf.stringToTerraform(struct!.controllerVersion),
  }
}


export function serverNetrisSoftgateToHclTerraform(struct?: ServerNetrisSoftgateOutputReference | ServerNetrisSoftgate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_address: {
      value: cdktf.stringToHclTerraform(struct!.controllerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_auth_key: {
      value: cdktf.stringToHclTerraform(struct!.controllerAuthKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller_version: {
      value: cdktf.stringToHclTerraform(struct!.controllerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetrisSoftgateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerNetrisSoftgate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerAddress = this._controllerAddress;
    }
    if (this._controllerAuthKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerAuthKey = this._controllerAuthKey;
    }
    if (this._controllerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerVersion = this._controllerVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetrisSoftgate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._controllerAddress = undefined;
      this._controllerAuthKey = undefined;
      this._controllerVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._controllerAddress = value.controllerAddress;
      this._controllerAuthKey = value.controllerAuthKey;
      this._controllerVersion = value.controllerVersion;
    }
  }

  // controller_address - computed: false, optional: true, required: false
  private _controllerAddress?: string; 
  public get controllerAddress() {
    return this.getStringAttribute('controller_address');
  }
  public set controllerAddress(value: string) {
    this._controllerAddress = value;
  }
  public resetControllerAddress() {
    this._controllerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerAddressInput() {
    return this._controllerAddress;
  }

  // controller_auth_key - computed: false, optional: true, required: false
  private _controllerAuthKey?: string; 
  public get controllerAuthKey() {
    return this.getStringAttribute('controller_auth_key');
  }
  public set controllerAuthKey(value: string) {
    this._controllerAuthKey = value;
  }
  public resetControllerAuthKey() {
    this._controllerAuthKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerAuthKeyInput() {
    return this._controllerAuthKey;
  }

  // controller_version - computed: false, optional: true, required: false
  private _controllerVersion?: string; 
  public get controllerVersion() {
    return this.getStringAttribute('controller_version');
  }
  public set controllerVersion(value: string) {
    this._controllerVersion = value;
  }
  public resetControllerVersion() {
    this._controllerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerVersionInput() {
    return this._controllerVersion;
  }

  // host_os - computed: true, optional: false, required: false
  public get hostOs() {
    return this.getStringAttribute('host_os');
  }
}
export interface ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#vlan_id Server#vlan_id}
  */
  readonly vlanId?: number;
}

export function serverNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlockToTerraform(struct?: ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlockOutputReference | ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function serverNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlockToHclTerraform(struct?: ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlockOutputReference | ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._vlanId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._vlanId = value.vlanId;
    }
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

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}
export interface ServerNetworkConfigurationIpBlocksConfigurationIpBlocks {
  /**
  * server_ip_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#server_ip_block Server#server_ip_block}
  */
  readonly serverIpBlock?: ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlock;
}

export function serverNetworkConfigurationIpBlocksConfigurationIpBlocksToTerraform(struct?: ServerNetworkConfigurationIpBlocksConfigurationIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_ip_block: serverNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlockToTerraform(struct!.serverIpBlock),
  }
}


export function serverNetworkConfigurationIpBlocksConfigurationIpBlocksToHclTerraform(struct?: ServerNetworkConfigurationIpBlocksConfigurationIpBlocks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_ip_block: {
      value: serverNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlockToHclTerraform(struct!.serverIpBlock),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkConfigurationIpBlocksConfigurationIpBlocksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerNetworkConfigurationIpBlocksConfigurationIpBlocks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverIpBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIpBlock = this._serverIpBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkConfigurationIpBlocksConfigurationIpBlocks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverIpBlock.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverIpBlock.internalValue = value.serverIpBlock;
    }
  }

  // server_ip_block - computed: false, optional: true, required: false
  private _serverIpBlock = new ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlockOutputReference(this, "server_ip_block");
  public get serverIpBlock() {
    return this._serverIpBlock;
  }
  public putServerIpBlock(value: ServerNetworkConfigurationIpBlocksConfigurationIpBlocksServerIpBlock) {
    this._serverIpBlock.internalValue = value;
  }
  public resetServerIpBlock() {
    this._serverIpBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpBlockInput() {
    return this._serverIpBlock.internalValue;
  }
}

export class ServerNetworkConfigurationIpBlocksConfigurationIpBlocksList extends cdktf.ComplexList {
  public internalValue? : ServerNetworkConfigurationIpBlocksConfigurationIpBlocks[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkConfigurationIpBlocksConfigurationIpBlocksOutputReference {
    return new ServerNetworkConfigurationIpBlocksConfigurationIpBlocksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetworkConfigurationIpBlocksConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#configuration_type Server#configuration_type}
  */
  readonly configurationType?: string;
  /**
  * ip_blocks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#ip_blocks Server#ip_blocks}
  */
  readonly ipBlocks?: ServerNetworkConfigurationIpBlocksConfigurationIpBlocks[] | cdktf.IResolvable;
}

export function serverNetworkConfigurationIpBlocksConfigurationToTerraform(struct?: ServerNetworkConfigurationIpBlocksConfigurationOutputReference | ServerNetworkConfigurationIpBlocksConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_type: cdktf.stringToTerraform(struct!.configurationType),
    ip_blocks: cdktf.listMapper(serverNetworkConfigurationIpBlocksConfigurationIpBlocksToTerraform, true)(struct!.ipBlocks),
  }
}


export function serverNetworkConfigurationIpBlocksConfigurationToHclTerraform(struct?: ServerNetworkConfigurationIpBlocksConfigurationOutputReference | ServerNetworkConfigurationIpBlocksConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_type: {
      value: cdktf.stringToHclTerraform(struct!.configurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_blocks: {
      value: cdktf.listMapperHcl(serverNetworkConfigurationIpBlocksConfigurationIpBlocksToHclTerraform, true)(struct!.ipBlocks),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkConfigurationIpBlocksConfigurationIpBlocksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkConfigurationIpBlocksConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerNetworkConfigurationIpBlocksConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationType = this._configurationType;
    }
    if (this._ipBlocks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocks = this._ipBlocks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkConfigurationIpBlocksConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationType = undefined;
      this._ipBlocks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationType = value.configurationType;
      this._ipBlocks.internalValue = value.ipBlocks;
    }
  }

  // configuration_type - computed: true, optional: true, required: false
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  public resetConfigurationType() {
    this._configurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // ip_blocks - computed: false, optional: true, required: false
  private _ipBlocks = new ServerNetworkConfigurationIpBlocksConfigurationIpBlocksList(this, "ip_blocks", false);
  public get ipBlocks() {
    return this._ipBlocks;
  }
  public putIpBlocks(value: ServerNetworkConfigurationIpBlocksConfigurationIpBlocks[] | cdktf.IResolvable) {
    this._ipBlocks.internalValue = value;
  }
  public resetIpBlocks() {
    this._ipBlocks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksInput() {
    return this._ipBlocks.internalValue;
  }
}
export interface ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#dhcp Server#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#ips Server#ips}
  */
  readonly ips?: string[];
}

export function serverNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetworkToTerraform(struct?: ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetworkOutputReference | ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    id: cdktf.stringToTerraform(struct!.id),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
  }
}


export function serverNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetworkToHclTerraform(struct?: ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetworkOutputReference | ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhcp = undefined;
      this._id = undefined;
      this._ips = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhcp = value.dhcp;
      this._id = value.id;
      this._ips = value.ips;
    }
  }

  // dhcp - computed: true, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
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

  // ips - computed: true, optional: true, required: false
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // status_description - computed: true, optional: false, required: false
  public get statusDescription() {
    return this.getStringAttribute('status_description');
  }
}
export interface ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworks {
  /**
  * server_private_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#server_private_network Server#server_private_network}
  */
  readonly serverPrivateNetwork?: ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetwork;
}

export function serverNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksToTerraform(struct?: ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_private_network: serverNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetworkToTerraform(struct!.serverPrivateNetwork),
  }
}


export function serverNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksToHclTerraform(struct?: ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_private_network: {
      value: serverNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetworkToHclTerraform(struct!.serverPrivateNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverPrivateNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPrivateNetwork = this._serverPrivateNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverPrivateNetwork.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverPrivateNetwork.internalValue = value.serverPrivateNetwork;
    }
  }

  // server_private_network - computed: false, optional: true, required: false
  private _serverPrivateNetwork = new ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetworkOutputReference(this, "server_private_network");
  public get serverPrivateNetwork() {
    return this._serverPrivateNetwork;
  }
  public putServerPrivateNetwork(value: ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksServerPrivateNetwork) {
    this._serverPrivateNetwork.internalValue = value;
  }
  public resetServerPrivateNetwork() {
    this._serverPrivateNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPrivateNetworkInput() {
    return this._serverPrivateNetwork.internalValue;
  }
}

export class ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksList extends cdktf.ComplexList {
  public internalValue? : ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksOutputReference {
    return new ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetworkConfigurationPrivateNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#configuration_type Server#configuration_type}
  */
  readonly configurationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#gateway_address Server#gateway_address}
  */
  readonly gatewayAddress?: string;
  /**
  * private_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#private_networks Server#private_networks}
  */
  readonly privateNetworks?: ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworks[] | cdktf.IResolvable;
}

export function serverNetworkConfigurationPrivateNetworkConfigurationToTerraform(struct?: ServerNetworkConfigurationPrivateNetworkConfigurationOutputReference | ServerNetworkConfigurationPrivateNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_type: cdktf.stringToTerraform(struct!.configurationType),
    gateway_address: cdktf.stringToTerraform(struct!.gatewayAddress),
    private_networks: cdktf.listMapper(serverNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksToTerraform, true)(struct!.privateNetworks),
  }
}


export function serverNetworkConfigurationPrivateNetworkConfigurationToHclTerraform(struct?: ServerNetworkConfigurationPrivateNetworkConfigurationOutputReference | ServerNetworkConfigurationPrivateNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_type: {
      value: cdktf.stringToHclTerraform(struct!.configurationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_networks: {
      value: cdktf.listMapperHcl(serverNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksToHclTerraform, true)(struct!.privateNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkConfigurationPrivateNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerNetworkConfigurationPrivateNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationType = this._configurationType;
    }
    if (this._gatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayAddress = this._gatewayAddress;
    }
    if (this._privateNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworks = this._privateNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkConfigurationPrivateNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configurationType = undefined;
      this._gatewayAddress = undefined;
      this._privateNetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configurationType = value.configurationType;
      this._gatewayAddress = value.gatewayAddress;
      this._privateNetworks.internalValue = value.privateNetworks;
    }
  }

  // configuration_type - computed: true, optional: true, required: false
  private _configurationType?: string; 
  public get configurationType() {
    return this.getStringAttribute('configuration_type');
  }
  public set configurationType(value: string) {
    this._configurationType = value;
  }
  public resetConfigurationType() {
    this._configurationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationTypeInput() {
    return this._configurationType;
  }

  // gateway_address - computed: true, optional: true, required: false
  private _gatewayAddress?: string; 
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }
  public set gatewayAddress(value: string) {
    this._gatewayAddress = value;
  }
  public resetGatewayAddress() {
    this._gatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressInput() {
    return this._gatewayAddress;
  }

  // private_networks - computed: false, optional: true, required: false
  private _privateNetworks = new ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworksList(this, "private_networks", false);
  public get privateNetworks() {
    return this._privateNetworks;
  }
  public putPrivateNetworks(value: ServerNetworkConfigurationPrivateNetworkConfigurationPrivateNetworks[] | cdktf.IResolvable) {
    this._privateNetworks.internalValue = value;
  }
  public resetPrivateNetworks() {
    this._privateNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworksInput() {
    return this._privateNetworks.internalValue;
  }
}
export interface ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#compute_slaac_ip Server#compute_slaac_ip}
  */
  readonly computeSlaacIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#ips Server#ips}
  */
  readonly ips: string[];
}

export function serverNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetworkToTerraform(struct?: ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetworkOutputReference | ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_slaac_ip: cdktf.booleanToTerraform(struct!.computeSlaacIp),
    id: cdktf.stringToTerraform(struct!.id),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
  }
}


export function serverNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetworkToHclTerraform(struct?: ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetworkOutputReference | ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_slaac_ip: {
      value: cdktf.booleanToHclTerraform(struct!.computeSlaacIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeSlaacIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeSlaacIp = this._computeSlaacIp;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._computeSlaacIp = undefined;
      this._id = undefined;
      this._ips = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._computeSlaacIp = value.computeSlaacIp;
      this._id = value.id;
      this._ips = value.ips;
    }
  }

  // compute_slaac_ip - computed: false, optional: true, required: false
  private _computeSlaacIp?: boolean | cdktf.IResolvable; 
  public get computeSlaacIp() {
    return this.getBooleanAttribute('compute_slaac_ip');
  }
  public set computeSlaacIp(value: boolean | cdktf.IResolvable) {
    this._computeSlaacIp = value;
  }
  public resetComputeSlaacIp() {
    this._computeSlaacIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeSlaacIpInput() {
    return this._computeSlaacIp;
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

  // ips - computed: false, optional: false, required: true
  private _ips?: string[]; 
  public get ips() {
    return cdktf.Fn.tolist(this.getListAttribute('ips'));
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // status_description - computed: true, optional: false, required: false
  public get statusDescription() {
    return this.getStringAttribute('status_description');
  }
}
export interface ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworks {
  /**
  * server_public_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#server_public_network Server#server_public_network}
  */
  readonly serverPublicNetwork?: ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetwork;
}

export function serverNetworkConfigurationPublicNetworkConfigurationPublicNetworksToTerraform(struct?: ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    server_public_network: serverNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetworkToTerraform(struct!.serverPublicNetwork),
  }
}


export function serverNetworkConfigurationPublicNetworkConfigurationPublicNetworksToHclTerraform(struct?: ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    server_public_network: {
      value: serverNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetworkToHclTerraform(struct!.serverPublicNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serverPublicNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPublicNetwork = this._serverPublicNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serverPublicNetwork.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serverPublicNetwork.internalValue = value.serverPublicNetwork;
    }
  }

  // server_public_network - computed: false, optional: true, required: false
  private _serverPublicNetwork = new ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetworkOutputReference(this, "server_public_network");
  public get serverPublicNetwork() {
    return this._serverPublicNetwork;
  }
  public putServerPublicNetwork(value: ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksServerPublicNetwork) {
    this._serverPublicNetwork.internalValue = value;
  }
  public resetServerPublicNetwork() {
    this._serverPublicNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPublicNetworkInput() {
    return this._serverPublicNetwork.internalValue;
  }
}

export class ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksList extends cdktf.ComplexList {
  public internalValue? : ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksOutputReference {
    return new ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerNetworkConfigurationPublicNetworkConfiguration {
  /**
  * public_networks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#public_networks Server#public_networks}
  */
  readonly publicNetworks?: ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworks[] | cdktf.IResolvable;
}

export function serverNetworkConfigurationPublicNetworkConfigurationToTerraform(struct?: ServerNetworkConfigurationPublicNetworkConfigurationOutputReference | ServerNetworkConfigurationPublicNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_networks: cdktf.listMapper(serverNetworkConfigurationPublicNetworkConfigurationPublicNetworksToTerraform, true)(struct!.publicNetworks),
  }
}


export function serverNetworkConfigurationPublicNetworkConfigurationToHclTerraform(struct?: ServerNetworkConfigurationPublicNetworkConfigurationOutputReference | ServerNetworkConfigurationPublicNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_networks: {
      value: cdktf.listMapperHcl(serverNetworkConfigurationPublicNetworkConfigurationPublicNetworksToHclTerraform, true)(struct!.publicNetworks),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkConfigurationPublicNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerNetworkConfigurationPublicNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicNetworks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworks = this._publicNetworks?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkConfigurationPublicNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicNetworks.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicNetworks.internalValue = value.publicNetworks;
    }
  }

  // public_networks - computed: false, optional: true, required: false
  private _publicNetworks = new ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworksList(this, "public_networks", false);
  public get publicNetworks() {
    return this._publicNetworks;
  }
  public putPublicNetworks(value: ServerNetworkConfigurationPublicNetworkConfigurationPublicNetworks[] | cdktf.IResolvable) {
    this._publicNetworks.internalValue = value;
  }
  public resetPublicNetworks() {
    this._publicNetworks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworksInput() {
    return this._publicNetworks.internalValue;
  }
}
export interface ServerNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#gateway_address Server#gateway_address}
  */
  readonly gatewayAddress?: string;
  /**
  * ip_blocks_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#ip_blocks_configuration Server#ip_blocks_configuration}
  */
  readonly ipBlocksConfiguration?: ServerNetworkConfigurationIpBlocksConfiguration;
  /**
  * private_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#private_network_configuration Server#private_network_configuration}
  */
  readonly privateNetworkConfiguration?: ServerNetworkConfigurationPrivateNetworkConfiguration;
  /**
  * public_network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#public_network_configuration Server#public_network_configuration}
  */
  readonly publicNetworkConfiguration?: ServerNetworkConfigurationPublicNetworkConfiguration;
}

export function serverNetworkConfigurationToTerraform(struct?: ServerNetworkConfigurationOutputReference | ServerNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_address: cdktf.stringToTerraform(struct!.gatewayAddress),
    ip_blocks_configuration: serverNetworkConfigurationIpBlocksConfigurationToTerraform(struct!.ipBlocksConfiguration),
    private_network_configuration: serverNetworkConfigurationPrivateNetworkConfigurationToTerraform(struct!.privateNetworkConfiguration),
    public_network_configuration: serverNetworkConfigurationPublicNetworkConfigurationToTerraform(struct!.publicNetworkConfiguration),
  }
}


export function serverNetworkConfigurationToHclTerraform(struct?: ServerNetworkConfigurationOutputReference | ServerNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_blocks_configuration: {
      value: serverNetworkConfigurationIpBlocksConfigurationToHclTerraform(struct!.ipBlocksConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkConfigurationIpBlocksConfigurationList",
    },
    private_network_configuration: {
      value: serverNetworkConfigurationPrivateNetworkConfigurationToHclTerraform(struct!.privateNetworkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkConfigurationPrivateNetworkConfigurationList",
    },
    public_network_configuration: {
      value: serverNetworkConfigurationPublicNetworkConfigurationToHclTerraform(struct!.publicNetworkConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "ServerNetworkConfigurationPublicNetworkConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayAddress = this._gatewayAddress;
    }
    if (this._ipBlocksConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipBlocksConfiguration = this._ipBlocksConfiguration?.internalValue;
    }
    if (this._privateNetworkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkConfiguration = this._privateNetworkConfiguration?.internalValue;
    }
    if (this._publicNetworkConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkConfiguration = this._publicNetworkConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayAddress = undefined;
      this._ipBlocksConfiguration.internalValue = undefined;
      this._privateNetworkConfiguration.internalValue = undefined;
      this._publicNetworkConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayAddress = value.gatewayAddress;
      this._ipBlocksConfiguration.internalValue = value.ipBlocksConfiguration;
      this._privateNetworkConfiguration.internalValue = value.privateNetworkConfiguration;
      this._publicNetworkConfiguration.internalValue = value.publicNetworkConfiguration;
    }
  }

  // gateway_address - computed: true, optional: true, required: false
  private _gatewayAddress?: string; 
  public get gatewayAddress() {
    return this.getStringAttribute('gateway_address');
  }
  public set gatewayAddress(value: string) {
    this._gatewayAddress = value;
  }
  public resetGatewayAddress() {
    this._gatewayAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayAddressInput() {
    return this._gatewayAddress;
  }

  // ip_blocks_configuration - computed: false, optional: true, required: false
  private _ipBlocksConfiguration = new ServerNetworkConfigurationIpBlocksConfigurationOutputReference(this, "ip_blocks_configuration");
  public get ipBlocksConfiguration() {
    return this._ipBlocksConfiguration;
  }
  public putIpBlocksConfiguration(value: ServerNetworkConfigurationIpBlocksConfiguration) {
    this._ipBlocksConfiguration.internalValue = value;
  }
  public resetIpBlocksConfiguration() {
    this._ipBlocksConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipBlocksConfigurationInput() {
    return this._ipBlocksConfiguration.internalValue;
  }

  // private_network_configuration - computed: false, optional: true, required: false
  private _privateNetworkConfiguration = new ServerNetworkConfigurationPrivateNetworkConfigurationOutputReference(this, "private_network_configuration");
  public get privateNetworkConfiguration() {
    return this._privateNetworkConfiguration;
  }
  public putPrivateNetworkConfiguration(value: ServerNetworkConfigurationPrivateNetworkConfiguration) {
    this._privateNetworkConfiguration.internalValue = value;
  }
  public resetPrivateNetworkConfiguration() {
    this._privateNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkConfigurationInput() {
    return this._privateNetworkConfiguration.internalValue;
  }

  // public_network_configuration - computed: false, optional: true, required: false
  private _publicNetworkConfiguration = new ServerNetworkConfigurationPublicNetworkConfigurationOutputReference(this, "public_network_configuration");
  public get publicNetworkConfiguration() {
    return this._publicNetworkConfiguration;
  }
  public putPublicNetworkConfiguration(value: ServerNetworkConfigurationPublicNetworkConfiguration) {
    this._publicNetworkConfiguration.internalValue = value;
  }
  public resetPublicNetworkConfiguration() {
    this._publicNetworkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkConfigurationInput() {
    return this._publicNetworkConfiguration.internalValue;
  }
}
export interface ServerStorageConfigurationRootPartition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#raid Server#raid}
  */
  readonly raid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#size Server#size}
  */
  readonly size?: number;
}

export function serverStorageConfigurationRootPartitionToTerraform(struct?: ServerStorageConfigurationRootPartitionOutputReference | ServerStorageConfigurationRootPartition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raid: cdktf.stringToTerraform(struct!.raid),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function serverStorageConfigurationRootPartitionToHclTerraform(struct?: ServerStorageConfigurationRootPartitionOutputReference | ServerStorageConfigurationRootPartition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raid: {
      value: cdktf.stringToHclTerraform(struct!.raid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerStorageConfigurationRootPartitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerStorageConfigurationRootPartition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raid !== undefined) {
      hasAnyValues = true;
      internalValueResult.raid = this._raid;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerStorageConfigurationRootPartition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raid = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raid = value.raid;
      this._size = value.size;
    }
  }

  // raid - computed: false, optional: true, required: false
  private _raid?: string; 
  public get raid() {
    return this.getStringAttribute('raid');
  }
  public set raid(value: string) {
    this._raid = value;
  }
  public resetRaid() {
    this._raid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get raidInput() {
    return this._raid;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface ServerStorageConfiguration {
  /**
  * root_partition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#root_partition Server#root_partition}
  */
  readonly rootPartition?: ServerStorageConfigurationRootPartition;
}

export function serverStorageConfigurationToTerraform(struct?: ServerStorageConfigurationOutputReference | ServerStorageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    root_partition: serverStorageConfigurationRootPartitionToTerraform(struct!.rootPartition),
  }
}


export function serverStorageConfigurationToHclTerraform(struct?: ServerStorageConfigurationOutputReference | ServerStorageConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    root_partition: {
      value: serverStorageConfigurationRootPartitionToHclTerraform(struct!.rootPartition),
      isBlock: true,
      type: "list",
      storageClassType: "ServerStorageConfigurationRootPartitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerStorageConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerStorageConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rootPartition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPartition = this._rootPartition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerStorageConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rootPartition.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rootPartition.internalValue = value.rootPartition;
    }
  }

  // root_partition - computed: false, optional: true, required: false
  private _rootPartition = new ServerStorageConfigurationRootPartitionOutputReference(this, "root_partition");
  public get rootPartition() {
    return this._rootPartition;
  }
  public putRootPartition(value: ServerStorageConfigurationRootPartition) {
    this._rootPartition.internalValue = value;
  }
  public resetRootPartition() {
    this._rootPartition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPartitionInput() {
    return this._rootPartition.internalValue;
  }
}
export interface ServerTagsTagAssignment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#name Server#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#value Server#value}
  */
  readonly value?: string;
}

export function serverTagsTagAssignmentToTerraform(struct?: ServerTagsTagAssignmentOutputReference | ServerTagsTagAssignment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function serverTagsTagAssignmentToHclTerraform(struct?: ServerTagsTagAssignmentOutputReference | ServerTagsTagAssignment): any {
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

export class ServerTagsTagAssignmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServerTagsTagAssignment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerTagsTagAssignment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_billing_tag - computed: true, optional: false, required: false
  public get isBillingTag() {
    return this.getBooleanAttribute('is_billing_tag');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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
export interface ServerTags {
  /**
  * tag_assignment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#tag_assignment Server#tag_assignment}
  */
  readonly tagAssignment?: ServerTagsTagAssignment;
}

export function serverTagsToTerraform(struct?: ServerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_assignment: serverTagsTagAssignmentToTerraform(struct!.tagAssignment),
  }
}


export function serverTagsToHclTerraform(struct?: ServerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_assignment: {
      value: serverTagsTagAssignmentToHclTerraform(struct!.tagAssignment),
      isBlock: true,
      type: "list",
      storageClassType: "ServerTagsTagAssignmentList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagAssignment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagAssignment = this._tagAssignment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagAssignment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagAssignment.internalValue = value.tagAssignment;
    }
  }

  // tag_assignment - computed: false, optional: true, required: false
  private _tagAssignment = new ServerTagsTagAssignmentOutputReference(this, "tag_assignment");
  public get tagAssignment() {
    return this._tagAssignment;
  }
  public putTagAssignment(value: ServerTagsTagAssignment) {
    this._tagAssignment.internalValue = value;
  }
  public resetTagAssignment() {
    this._tagAssignment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagAssignmentInput() {
    return this._tagAssignment.internalValue;
  }
}

export class ServerTagsList extends cdktf.ComplexList {
  public internalValue? : ServerTags[] | cdktf.IResolvable

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
  public get(index: number): ServerTagsOutputReference {
    return new ServerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#create Server#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#delete Server#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#update Server#update}
  */
  readonly update?: string;
}

export function serverTimeoutsToTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serverTimeoutsToHclTerraform(struct?: ServerTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServerTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server pnap_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pnap_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pnap_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/phoenixnap/pnap/0.30.0/docs/resources/server pnap_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'pnap_server',
      terraformGeneratorMetadata: {
        providerName: 'pnap',
        providerVersion: '0.30.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._bringYourOwnLicense = config.bringYourOwnLicense;
    this._deleteIpBlocks = config.deleteIpBlocks;
    this._description = config.description;
    this._force = config.force;
    this._hostname = config.hostname;
    this._id = config.id;
    this._installDefaultSshKeys = config.installDefaultSshKeys;
    this._installOsToRam = config.installOsToRam;
    this._location = config.location;
    this._managementAccessAllowedIps = config.managementAccessAllowedIps;
    this._networkType = config.networkType;
    this._os = config.os;
    this._pricingModel = config.pricingModel;
    this._rdpAllowedIps = config.rdpAllowedIps;
    this._reservationId = config.reservationId;
    this._sshKeyIds = config.sshKeyIds;
    this._sshKeys = config.sshKeys;
    this._transferReservationTo = config.transferReservationTo;
    this._type = config.type;
    this._cloudInit.internalValue = config.cloudInit;
    this._esxi.internalValue = config.esxi;
    this._netrisSoftgate.internalValue = config.netrisSoftgate;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._storageConfiguration.internalValue = config.storageConfiguration;
    this._tags.internalValue = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // bring_your_own_license - computed: true, optional: true, required: false
  private _bringYourOwnLicense?: boolean | cdktf.IResolvable; 
  public get bringYourOwnLicense() {
    return this.getBooleanAttribute('bring_your_own_license');
  }
  public set bringYourOwnLicense(value: boolean | cdktf.IResolvable) {
    this._bringYourOwnLicense = value;
  }
  public resetBringYourOwnLicense() {
    this._bringYourOwnLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bringYourOwnLicenseInput() {
    return this._bringYourOwnLicense;
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // cores_per_cpu - computed: true, optional: false, required: false
  public get coresPerCpu() {
    return this.getNumberAttribute('cores_per_cpu');
  }

  // cpu - computed: true, optional: false, required: false
  public get cpu() {
    return this.getStringAttribute('cpu');
  }

  // cpu_count - computed: true, optional: false, required: false
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }

  // cpu_frequency_in_ghz - computed: true, optional: false, required: false
  public get cpuFrequencyInGhz() {
    return this.getNumberAttribute('cpu_frequency_in_ghz');
  }

  // delete_ip_blocks - computed: false, optional: true, required: false
  private _deleteIpBlocks?: boolean | cdktf.IResolvable; 
  public get deleteIpBlocks() {
    return this.getBooleanAttribute('delete_ip_blocks');
  }
  public set deleteIpBlocks(value: boolean | cdktf.IResolvable) {
    this._deleteIpBlocks = value;
  }
  public resetDeleteIpBlocks() {
    this._deleteIpBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteIpBlocksInput() {
    return this._deleteIpBlocks;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // gpu_configuration - computed: true, optional: false, required: false
  private _gpuConfiguration = new ServerGpuConfigurationList(this, "gpu_configuration", false);
  public get gpuConfiguration() {
    return this._gpuConfiguration;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // install_default_ssh_keys - computed: false, optional: true, required: false
  private _installDefaultSshKeys?: boolean | cdktf.IResolvable; 
  public get installDefaultSshKeys() {
    return this.getBooleanAttribute('install_default_ssh_keys');
  }
  public set installDefaultSshKeys(value: boolean | cdktf.IResolvable) {
    this._installDefaultSshKeys = value;
  }
  public resetInstallDefaultSshKeys() {
    this._installDefaultSshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installDefaultSshKeysInput() {
    return this._installDefaultSshKeys;
  }

  // install_os_to_ram - computed: true, optional: true, required: false
  private _installOsToRam?: boolean | cdktf.IResolvable; 
  public get installOsToRam() {
    return this.getBooleanAttribute('install_os_to_ram');
  }
  public set installOsToRam(value: boolean | cdktf.IResolvable) {
    this._installOsToRam = value;
  }
  public resetInstallOsToRam() {
    this._installOsToRam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installOsToRamInput() {
    return this._installOsToRam;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // management_access_allowed_ips - computed: true, optional: true, required: false
  private _managementAccessAllowedIps?: string[]; 
  public get managementAccessAllowedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('management_access_allowed_ips'));
  }
  public set managementAccessAllowedIps(value: string[]) {
    this._managementAccessAllowedIps = value;
  }
  public resetManagementAccessAllowedIps() {
    this._managementAccessAllowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAccessAllowedIpsInput() {
    return this._managementAccessAllowedIps;
  }

  // management_ui_url - computed: true, optional: false, required: false
  public get managementUiUrl() {
    return this.getStringAttribute('management_ui_url');
  }

  // netris_controller - computed: true, optional: false, required: false
  private _netrisController = new ServerNetrisControllerList(this, "netris_controller", false);
  public get netrisController() {
    return this._netrisController;
  }

  // network_type - computed: true, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // os - computed: false, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // pricing_model - computed: true, optional: true, required: false
  private _pricingModel?: string; 
  public get pricingModel() {
    return this.getStringAttribute('pricing_model');
  }
  public set pricingModel(value: string) {
    this._pricingModel = value;
  }
  public resetPricingModel() {
    this._pricingModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingModelInput() {
    return this._pricingModel;
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ip_addresses'));
  }

  // provisioned_on - computed: true, optional: false, required: false
  public get provisionedOn() {
    return this.getStringAttribute('provisioned_on');
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('public_ip_addresses'));
  }

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getStringAttribute('ram');
  }

  // rdp_allowed_ips - computed: true, optional: true, required: false
  private _rdpAllowedIps?: string[]; 
  public get rdpAllowedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('rdp_allowed_ips'));
  }
  public set rdpAllowedIps(value: string[]) {
    this._rdpAllowedIps = value;
  }
  public resetRdpAllowedIps() {
    this._rdpAllowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpAllowedIpsInput() {
    return this._rdpAllowedIps;
  }

  // reservation_id - computed: true, optional: true, required: false
  private _reservationId?: string; 
  public get reservationId() {
    return this.getStringAttribute('reservation_id');
  }
  public set reservationId(value: string) {
    this._reservationId = value;
  }
  public resetReservationId() {
    this._reservationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationIdInput() {
    return this._reservationId;
  }

  // root_password - computed: true, optional: false, required: false
  public get rootPassword() {
    return this.getStringAttribute('root_password');
  }

  // ssh_key_ids - computed: false, optional: true, required: false
  private _sshKeyIds?: string[]; 
  public get sshKeyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_key_ids'));
  }
  public set sshKeyIds(value: string[]) {
    this._sshKeyIds = value;
  }
  public resetSshKeyIds() {
    this._sshKeyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyIdsInput() {
    return this._sshKeyIds;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getStringAttribute('storage');
  }

  // superseded_by - computed: true, optional: false, required: false
  public get supersededBy() {
    return this.getStringAttribute('superseded_by');
  }

  // supersedes - computed: true, optional: false, required: false
  public get supersedes() {
    return this.getStringAttribute('supersedes');
  }

  // transfer_reservation_to - computed: false, optional: true, required: false
  private _transferReservationTo?: string; 
  public get transferReservationTo() {
    return this.getStringAttribute('transfer_reservation_to');
  }
  public set transferReservationTo(value: string) {
    this._transferReservationTo = value;
  }
  public resetTransferReservationTo() {
    this._transferReservationTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferReservationToInput() {
    return this._transferReservationTo;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // cloud_init - computed: false, optional: true, required: false
  private _cloudInit = new ServerCloudInitOutputReference(this, "cloud_init");
  public get cloudInit() {
    return this._cloudInit;
  }
  public putCloudInit(value: ServerCloudInit) {
    this._cloudInit.internalValue = value;
  }
  public resetCloudInit() {
    this._cloudInit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInitInput() {
    return this._cloudInit.internalValue;
  }

  // esxi - computed: false, optional: true, required: false
  private _esxi = new ServerEsxiOutputReference(this, "esxi");
  public get esxi() {
    return this._esxi;
  }
  public putEsxi(value: ServerEsxi) {
    this._esxi.internalValue = value;
  }
  public resetEsxi() {
    this._esxi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get esxiInput() {
    return this._esxi.internalValue;
  }

  // netris_softgate - computed: false, optional: true, required: false
  private _netrisSoftgate = new ServerNetrisSoftgateOutputReference(this, "netris_softgate");
  public get netrisSoftgate() {
    return this._netrisSoftgate;
  }
  public putNetrisSoftgate(value: ServerNetrisSoftgate) {
    this._netrisSoftgate.internalValue = value;
  }
  public resetNetrisSoftgate() {
    this._netrisSoftgate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netrisSoftgateInput() {
    return this._netrisSoftgate.internalValue;
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration = new ServerNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: ServerNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration = new ServerStorageConfigurationOutputReference(this, "storage_configuration");
  public get storageConfiguration() {
    return this._storageConfiguration;
  }
  public putStorageConfiguration(value: ServerStorageConfiguration) {
    this._storageConfiguration.internalValue = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new ServerTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: ServerTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      bring_your_own_license: cdktf.booleanToTerraform(this._bringYourOwnLicense),
      delete_ip_blocks: cdktf.booleanToTerraform(this._deleteIpBlocks),
      description: cdktf.stringToTerraform(this._description),
      force: cdktf.booleanToTerraform(this._force),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      install_default_ssh_keys: cdktf.booleanToTerraform(this._installDefaultSshKeys),
      install_os_to_ram: cdktf.booleanToTerraform(this._installOsToRam),
      location: cdktf.stringToTerraform(this._location),
      management_access_allowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._managementAccessAllowedIps),
      network_type: cdktf.stringToTerraform(this._networkType),
      os: cdktf.stringToTerraform(this._os),
      pricing_model: cdktf.stringToTerraform(this._pricingModel),
      rdp_allowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._rdpAllowedIps),
      reservation_id: cdktf.stringToTerraform(this._reservationId),
      ssh_key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeyIds),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      transfer_reservation_to: cdktf.stringToTerraform(this._transferReservationTo),
      type: cdktf.stringToTerraform(this._type),
      cloud_init: serverCloudInitToTerraform(this._cloudInit.internalValue),
      esxi: serverEsxiToTerraform(this._esxi.internalValue),
      netris_softgate: serverNetrisSoftgateToTerraform(this._netrisSoftgate.internalValue),
      network_configuration: serverNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      storage_configuration: serverStorageConfigurationToTerraform(this._storageConfiguration.internalValue),
      tags: cdktf.listMapper(serverTagsToTerraform, true)(this._tags.internalValue),
      timeouts: serverTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bring_your_own_license: {
        value: cdktf.booleanToHclTerraform(this._bringYourOwnLicense),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_ip_blocks: {
        value: cdktf.booleanToHclTerraform(this._deleteIpBlocks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      install_default_ssh_keys: {
        value: cdktf.booleanToHclTerraform(this._installDefaultSshKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      install_os_to_ram: {
        value: cdktf.booleanToHclTerraform(this._installOsToRam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      management_access_allowed_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._managementAccessAllowedIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os: {
        value: cdktf.stringToHclTerraform(this._os),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pricing_model: {
        value: cdktf.stringToHclTerraform(this._pricingModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_allowed_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._rdpAllowedIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      reservation_id: {
        value: cdktf.stringToHclTerraform(this._reservationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      transfer_reservation_to: {
        value: cdktf.stringToHclTerraform(this._transferReservationTo),
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
      cloud_init: {
        value: serverCloudInitToHclTerraform(this._cloudInit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerCloudInitList",
      },
      esxi: {
        value: serverEsxiToHclTerraform(this._esxi.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerEsxiList",
      },
      netris_softgate: {
        value: serverNetrisSoftgateToHclTerraform(this._netrisSoftgate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerNetrisSoftgateList",
      },
      network_configuration: {
        value: serverNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerNetworkConfigurationList",
      },
      storage_configuration: {
        value: serverStorageConfigurationToHclTerraform(this._storageConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerStorageConfigurationList",
      },
      tags: {
        value: cdktf.listMapperHcl(serverTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerTagsList",
      },
      timeouts: {
        value: serverTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
