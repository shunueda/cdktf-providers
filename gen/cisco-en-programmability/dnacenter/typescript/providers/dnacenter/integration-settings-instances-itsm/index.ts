// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationSettingsInstancesItsmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#id IntegrationSettingsInstancesItsm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#parameters IntegrationSettingsInstancesItsm#parameters}
  */
  readonly parameters?: IntegrationSettingsInstancesItsmParameters[] | cdktf.IResolvable;
}
export interface IntegrationSettingsInstancesItsmItemDataConnectionSettings {
}

export function integrationSettingsInstancesItsmItemDataConnectionSettingsToTerraform(struct?: IntegrationSettingsInstancesItsmItemDataConnectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationSettingsInstancesItsmItemDataConnectionSettingsToHclTerraform(struct?: IntegrationSettingsInstancesItsmItemDataConnectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationSettingsInstancesItsmItemDataConnectionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationSettingsInstancesItsmItemDataConnectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSettingsInstancesItsmItemDataConnectionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth_password - computed: true, optional: false, required: false
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }

  // auth_user_name - computed: true, optional: false, required: false
  public get authUserName() {
    return this.getStringAttribute('auth_user_name');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class IntegrationSettingsInstancesItsmItemDataConnectionSettingsList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationSettingsInstancesItsmItemDataConnectionSettingsOutputReference {
    return new IntegrationSettingsInstancesItsmItemDataConnectionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationSettingsInstancesItsmItemData {
}

export function integrationSettingsInstancesItsmItemDataToTerraform(struct?: IntegrationSettingsInstancesItsmItemData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationSettingsInstancesItsmItemDataToHclTerraform(struct?: IntegrationSettingsInstancesItsmItemData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationSettingsInstancesItsmItemDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationSettingsInstancesItsmItemData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSettingsInstancesItsmItemData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_settings - computed: true, optional: false, required: false
  private _connectionSettings = new IntegrationSettingsInstancesItsmItemDataConnectionSettingsList(this, "connection_settings", false);
  public get connectionSettings() {
    return this._connectionSettings;
  }
}

export class IntegrationSettingsInstancesItsmItemDataList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationSettingsInstancesItsmItemDataOutputReference {
    return new IntegrationSettingsInstancesItsmItemDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationSettingsInstancesItsmItem {
}

export function integrationSettingsInstancesItsmItemToTerraform(struct?: IntegrationSettingsInstancesItsmItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function integrationSettingsInstancesItsmItemToHclTerraform(struct?: IntegrationSettingsInstancesItsmItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IntegrationSettingsInstancesItsmItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationSettingsInstancesItsmItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSettingsInstancesItsmItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data - computed: true, optional: false, required: false
  private _data = new IntegrationSettingsInstancesItsmItemDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dyp_id - computed: true, optional: false, required: false
  public get dypId() {
    return this.getStringAttribute('dyp_id');
  }

  // dyp_major_version - computed: true, optional: false, required: false
  public get dypMajorVersion() {
    return this.getNumberAttribute('dyp_major_version');
  }

  // dyp_name - computed: true, optional: false, required: false
  public get dypName() {
    return this.getStringAttribute('dyp_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // unique_key - computed: true, optional: false, required: false
  public get uniqueKey() {
    return this.getStringAttribute('unique_key');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_date - computed: true, optional: false, required: false
  public get updatedDate() {
    return this.getNumberAttribute('updated_date');
  }
}

export class IntegrationSettingsInstancesItsmItemList extends cdktf.ComplexList {

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
  public get(index: number): IntegrationSettingsInstancesItsmItemOutputReference {
    return new IntegrationSettingsInstancesItsmItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationSettingsInstancesItsmParametersDataConnectionSettings {
  /**
  * Auth Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#auth_password IntegrationSettingsInstancesItsm#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Auth User Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#auth_user_name IntegrationSettingsInstancesItsm#auth_user_name}
  */
  readonly authUserName?: string;
  /**
  * Url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#url IntegrationSettingsInstancesItsm#url}
  */
  readonly url?: string;
}

export function integrationSettingsInstancesItsmParametersDataConnectionSettingsToTerraform(struct?: IntegrationSettingsInstancesItsmParametersDataConnectionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_user_name: cdktf.stringToTerraform(struct!.authUserName),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function integrationSettingsInstancesItsmParametersDataConnectionSettingsToHclTerraform(struct?: IntegrationSettingsInstancesItsmParametersDataConnectionSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_user_name: {
      value: cdktf.stringToHclTerraform(struct!.authUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSettingsInstancesItsmParametersDataConnectionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationSettingsInstancesItsmParametersDataConnectionSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUserName = this._authUserName;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSettingsInstancesItsmParametersDataConnectionSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authPassword = undefined;
      this._authUserName = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authPassword = value.authPassword;
      this._authUserName = value.authUserName;
      this._url = value.url;
    }
  }

  // auth_password - computed: true, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_user_name - computed: true, optional: true, required: false
  private _authUserName?: string; 
  public get authUserName() {
    return this.getStringAttribute('auth_user_name');
  }
  public set authUserName(value: string) {
    this._authUserName = value;
  }
  public resetAuthUserName() {
    this._authUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUserNameInput() {
    return this._authUserName;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class IntegrationSettingsInstancesItsmParametersDataConnectionSettingsList extends cdktf.ComplexList {
  public internalValue? : IntegrationSettingsInstancesItsmParametersDataConnectionSettings[] | cdktf.IResolvable

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
  public get(index: number): IntegrationSettingsInstancesItsmParametersDataConnectionSettingsOutputReference {
    return new IntegrationSettingsInstancesItsmParametersDataConnectionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationSettingsInstancesItsmParametersData {
  /**
  * connection_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#connection_settings IntegrationSettingsInstancesItsm#connection_settings}
  */
  readonly connectionSettings?: IntegrationSettingsInstancesItsmParametersDataConnectionSettings[] | cdktf.IResolvable;
}

export function integrationSettingsInstancesItsmParametersDataToTerraform(struct?: IntegrationSettingsInstancesItsmParametersData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_settings: cdktf.listMapper(integrationSettingsInstancesItsmParametersDataConnectionSettingsToTerraform, true)(struct!.connectionSettings),
  }
}


export function integrationSettingsInstancesItsmParametersDataToHclTerraform(struct?: IntegrationSettingsInstancesItsmParametersData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_settings: {
      value: cdktf.listMapperHcl(integrationSettingsInstancesItsmParametersDataConnectionSettingsToHclTerraform, true)(struct!.connectionSettings),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationSettingsInstancesItsmParametersDataConnectionSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSettingsInstancesItsmParametersDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationSettingsInstancesItsmParametersData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionSettings = this._connectionSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSettingsInstancesItsmParametersData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionSettings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionSettings.internalValue = value.connectionSettings;
    }
  }

  // connection_settings - computed: false, optional: true, required: false
  private _connectionSettings = new IntegrationSettingsInstancesItsmParametersDataConnectionSettingsList(this, "connection_settings", false);
  public get connectionSettings() {
    return this._connectionSettings;
  }
  public putConnectionSettings(value: IntegrationSettingsInstancesItsmParametersDataConnectionSettings[] | cdktf.IResolvable) {
    this._connectionSettings.internalValue = value;
  }
  public resetConnectionSettings() {
    this._connectionSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSettingsInput() {
    return this._connectionSettings.internalValue;
  }
}

export class IntegrationSettingsInstancesItsmParametersDataList extends cdktf.ComplexList {
  public internalValue? : IntegrationSettingsInstancesItsmParametersData[] | cdktf.IResolvable

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
  public get(index: number): IntegrationSettingsInstancesItsmParametersDataOutputReference {
    return new IntegrationSettingsInstancesItsmParametersDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IntegrationSettingsInstancesItsmParameters {
  /**
  * Description of the setting instance
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#description IntegrationSettingsInstancesItsm#description}
  */
  readonly description?: string;
  /**
  * It should be ServiceNowConnection
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#dyp_name IntegrationSettingsInstancesItsm#dyp_name}
  */
  readonly dypName?: string;
  /**
  * instanceId path parameter. Instance Id of the Integration setting instance
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#instance_id IntegrationSettingsInstancesItsm#instance_id}
  */
  readonly instanceId: string;
  /**
  * Name of the setting instance
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#name IntegrationSettingsInstancesItsm#name}
  */
  readonly name?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#data IntegrationSettingsInstancesItsm#data}
  */
  readonly data?: IntegrationSettingsInstancesItsmParametersData[] | cdktf.IResolvable;
}

export function integrationSettingsInstancesItsmParametersToTerraform(struct?: IntegrationSettingsInstancesItsmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dyp_name: cdktf.stringToTerraform(struct!.dypName),
    instance_id: cdktf.stringToTerraform(struct!.instanceId),
    name: cdktf.stringToTerraform(struct!.name),
    data: cdktf.listMapper(integrationSettingsInstancesItsmParametersDataToTerraform, true)(struct!.data),
  }
}


export function integrationSettingsInstancesItsmParametersToHclTerraform(struct?: IntegrationSettingsInstancesItsmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dyp_name: {
      value: cdktf.stringToHclTerraform(struct!.dypName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_id: {
      value: cdktf.stringToHclTerraform(struct!.instanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data: {
      value: cdktf.listMapperHcl(integrationSettingsInstancesItsmParametersDataToHclTerraform, true)(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "IntegrationSettingsInstancesItsmParametersDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationSettingsInstancesItsmParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IntegrationSettingsInstancesItsmParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dypName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dypName = this._dypName;
    }
    if (this._instanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceId = this._instanceId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationSettingsInstancesItsmParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dypName = undefined;
      this._instanceId = undefined;
      this._name = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dypName = value.dypName;
      this._instanceId = value.instanceId;
      this._name = value.name;
      this._data.internalValue = value.data;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // dyp_name - computed: true, optional: true, required: false
  private _dypName?: string; 
  public get dypName() {
    return this.getStringAttribute('dyp_name');
  }
  public set dypName(value: string) {
    this._dypName = value;
  }
  public resetDypName() {
    this._dypName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dypNameInput() {
    return this._dypName;
  }

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
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

  // data - computed: false, optional: true, required: false
  private _data = new IntegrationSettingsInstancesItsmParametersDataList(this, "data", false);
  public get data() {
    return this._data;
  }
  public putData(value: IntegrationSettingsInstancesItsmParametersData[] | cdktf.IResolvable) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}

export class IntegrationSettingsInstancesItsmParametersList extends cdktf.ComplexList {
  public internalValue? : IntegrationSettingsInstancesItsmParameters[] | cdktf.IResolvable

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
  public get(index: number): IntegrationSettingsInstancesItsmParametersOutputReference {
    return new IntegrationSettingsInstancesItsmParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm dnacenter_integration_settings_instances_itsm}
*/
export class IntegrationSettingsInstancesItsm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_integration_settings_instances_itsm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationSettingsInstancesItsm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationSettingsInstancesItsm to import
  * @param importFromId The id of the existing IntegrationSettingsInstancesItsm that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationSettingsInstancesItsm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_integration_settings_instances_itsm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/integration_settings_instances_itsm dnacenter_integration_settings_instances_itsm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationSettingsInstancesItsmConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IntegrationSettingsInstancesItsmConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_integration_settings_instances_itsm',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new IntegrationSettingsInstancesItsmItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new IntegrationSettingsInstancesItsmParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: IntegrationSettingsInstancesItsmParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(integrationSettingsInstancesItsmParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(integrationSettingsInstancesItsmParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IntegrationSettingsInstancesItsmParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
