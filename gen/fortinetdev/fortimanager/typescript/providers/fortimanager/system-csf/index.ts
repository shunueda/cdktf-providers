// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemCsfConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#accept_auth_by_cert SystemCsf#accept_auth_by_cert}
  */
  readonly acceptAuthByCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#authorization_request_type SystemCsf#authorization_request_type}
  */
  readonly authorizationRequestType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#certificate SystemCsf#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#configuration_sync SystemCsf#configuration_sync}
  */
  readonly configurationSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#downstream_access SystemCsf#downstream_access}
  */
  readonly downstreamAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#downstream_accprofile SystemCsf#downstream_accprofile}
  */
  readonly downstreamAccprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#dynamic_sort_subtable SystemCsf#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#fabric_object_unification SystemCsf#fabric_object_unification}
  */
  readonly fabricObjectUnification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#fabric_workers SystemCsf#fabric_workers}
  */
  readonly fabricWorkers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#file_mgmt SystemCsf#file_mgmt}
  */
  readonly fileMgmt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#file_quota SystemCsf#file_quota}
  */
  readonly fileQuota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#file_quota_warning SystemCsf#file_quota_warning}
  */
  readonly fileQuotaWarning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#fixed_key SystemCsf#fixed_key}
  */
  readonly fixedKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#forticloud_account_enforcement SystemCsf#forticloud_account_enforcement}
  */
  readonly forticloudAccountEnforcement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#group_name SystemCsf#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#group_password SystemCsf#group_password}
  */
  readonly groupPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#id SystemCsf#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#log_unification SystemCsf#log_unification}
  */
  readonly logUnification?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#saml_configuration_sync SystemCsf#saml_configuration_sync}
  */
  readonly samlConfigurationSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#ssl_protocol SystemCsf#ssl_protocol}
  */
  readonly sslProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#status SystemCsf#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#upstream SystemCsf#upstream}
  */
  readonly upstream?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#upstream_confirm SystemCsf#upstream_confirm}
  */
  readonly upstreamConfirm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#upstream_port SystemCsf#upstream_port}
  */
  readonly upstreamPort?: number;
  /**
  * fabric_connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#fabric_connector SystemCsf#fabric_connector}
  */
  readonly fabricConnector?: SystemCsfFabricConnector[] | cdktf.IResolvable;
  /**
  * trusted_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#trusted_list SystemCsf#trusted_list}
  */
  readonly trustedList?: SystemCsfTrustedListStruct[] | cdktf.IResolvable;
}
export interface SystemCsfFabricConnector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#accprofile SystemCsf#accprofile}
  */
  readonly accprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#configuration_write_access SystemCsf#configuration_write_access}
  */
  readonly configurationWriteAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#serial SystemCsf#serial}
  */
  readonly serial?: string;
}

export function systemCsfFabricConnectorToTerraform(struct?: SystemCsfFabricConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accprofile: cdktf.stringToTerraform(struct!.accprofile),
    configuration_write_access: cdktf.stringToTerraform(struct!.configurationWriteAccess),
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function systemCsfFabricConnectorToHclTerraform(struct?: SystemCsfFabricConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accprofile: {
      value: cdktf.stringToHclTerraform(struct!.accprofile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration_write_access: {
      value: cdktf.stringToHclTerraform(struct!.configurationWriteAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCsfFabricConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemCsfFabricConnector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accprofile !== undefined) {
      hasAnyValues = true;
      internalValueResult.accprofile = this._accprofile;
    }
    if (this._configurationWriteAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationWriteAccess = this._configurationWriteAccess;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCsfFabricConnector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accprofile = undefined;
      this._configurationWriteAccess = undefined;
      this._serial = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accprofile = value.accprofile;
      this._configurationWriteAccess = value.configurationWriteAccess;
      this._serial = value.serial;
    }
  }

  // accprofile - computed: false, optional: true, required: false
  private _accprofile?: string; 
  public get accprofile() {
    return this.getStringAttribute('accprofile');
  }
  public set accprofile(value: string) {
    this._accprofile = value;
  }
  public resetAccprofile() {
    this._accprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileInput() {
    return this._accprofile;
  }

  // configuration_write_access - computed: true, optional: true, required: false
  private _configurationWriteAccess?: string; 
  public get configurationWriteAccess() {
    return this.getStringAttribute('configuration_write_access');
  }
  public set configurationWriteAccess(value: string) {
    this._configurationWriteAccess = value;
  }
  public resetConfigurationWriteAccess() {
    this._configurationWriteAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationWriteAccessInput() {
    return this._configurationWriteAccess;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }
}

export class SystemCsfFabricConnectorList extends cdktf.ComplexList {
  public internalValue? : SystemCsfFabricConnector[] | cdktf.IResolvable

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
  public get(index: number): SystemCsfFabricConnectorOutputReference {
    return new SystemCsfFabricConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemCsfTrustedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#action SystemCsf#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#authorization_type SystemCsf#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#certificate SystemCsf#certificate}
  */
  readonly certificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#downstream_authorization SystemCsf#downstream_authorization}
  */
  readonly downstreamAuthorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#ha_members SystemCsf#ha_members}
  */
  readonly haMembers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#index SystemCsf#index}
  */
  readonly index?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#name SystemCsf#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#serial SystemCsf#serial}
  */
  readonly serial?: string;
}

export function systemCsfTrustedListStructToTerraform(struct?: SystemCsfTrustedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    authorization_type: cdktf.stringToTerraform(struct!.authorizationType),
    certificate: cdktf.stringToTerraform(struct!.certificate),
    downstream_authorization: cdktf.stringToTerraform(struct!.downstreamAuthorization),
    ha_members: cdktf.stringToTerraform(struct!.haMembers),
    index: cdktf.numberToTerraform(struct!.index),
    name: cdktf.stringToTerraform(struct!.name),
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function systemCsfTrustedListStructToHclTerraform(struct?: SystemCsfTrustedListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorization_type: {
      value: cdktf.stringToHclTerraform(struct!.authorizationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate: {
      value: cdktf.stringToHclTerraform(struct!.certificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downstream_authorization: {
      value: cdktf.stringToHclTerraform(struct!.downstreamAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ha_members: {
      value: cdktf.stringToHclTerraform(struct!.haMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.numberToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemCsfTrustedListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemCsfTrustedListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._authorizationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationType = this._authorizationType;
    }
    if (this._certificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificate = this._certificate;
    }
    if (this._downstreamAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.downstreamAuthorization = this._downstreamAuthorization;
    }
    if (this._haMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.haMembers = this._haMembers;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemCsfTrustedListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._authorizationType = undefined;
      this._certificate = undefined;
      this._downstreamAuthorization = undefined;
      this._haMembers = undefined;
      this._index = undefined;
      this._name = undefined;
      this._serial = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._authorizationType = value.authorizationType;
      this._certificate = value.certificate;
      this._downstreamAuthorization = value.downstreamAuthorization;
      this._haMembers = value.haMembers;
      this._index = value.index;
      this._name = value.name;
      this._serial = value.serial;
    }
  }

  // action - computed: true, optional: true, required: false
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

  // authorization_type - computed: true, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // downstream_authorization - computed: true, optional: true, required: false
  private _downstreamAuthorization?: string; 
  public get downstreamAuthorization() {
    return this.getStringAttribute('downstream_authorization');
  }
  public set downstreamAuthorization(value: string) {
    this._downstreamAuthorization = value;
  }
  public resetDownstreamAuthorization() {
    this._downstreamAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamAuthorizationInput() {
    return this._downstreamAuthorization;
  }

  // ha_members - computed: false, optional: true, required: false
  private _haMembers?: string; 
  public get haMembers() {
    return this.getStringAttribute('ha_members');
  }
  public set haMembers(value: string) {
    this._haMembers = value;
  }
  public resetHaMembers() {
    this._haMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haMembersInput() {
    return this._haMembers;
  }

  // index - computed: true, optional: true, required: false
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
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

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }
}

export class SystemCsfTrustedListStructList extends cdktf.ComplexList {
  public internalValue? : SystemCsfTrustedListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemCsfTrustedListStructOutputReference {
    return new SystemCsfTrustedListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf fortimanager_system_csf}
*/
export class SystemCsf extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_system_csf";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemCsf resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemCsf to import
  * @param importFromId The id of the existing SystemCsf that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemCsf to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_system_csf", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/system_csf fortimanager_system_csf} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemCsfConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemCsfConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_system_csf',
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
    this._acceptAuthByCert = config.acceptAuthByCert;
    this._authorizationRequestType = config.authorizationRequestType;
    this._certificate = config.certificate;
    this._configurationSync = config.configurationSync;
    this._downstreamAccess = config.downstreamAccess;
    this._downstreamAccprofile = config.downstreamAccprofile;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fabricObjectUnification = config.fabricObjectUnification;
    this._fabricWorkers = config.fabricWorkers;
    this._fileMgmt = config.fileMgmt;
    this._fileQuota = config.fileQuota;
    this._fileQuotaWarning = config.fileQuotaWarning;
    this._fixedKey = config.fixedKey;
    this._forticloudAccountEnforcement = config.forticloudAccountEnforcement;
    this._groupName = config.groupName;
    this._groupPassword = config.groupPassword;
    this._id = config.id;
    this._logUnification = config.logUnification;
    this._samlConfigurationSync = config.samlConfigurationSync;
    this._sslProtocol = config.sslProtocol;
    this._status = config.status;
    this._upstream = config.upstream;
    this._upstreamConfirm = config.upstreamConfirm;
    this._upstreamPort = config.upstreamPort;
    this._fabricConnector.internalValue = config.fabricConnector;
    this._trustedList.internalValue = config.trustedList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_auth_by_cert - computed: true, optional: true, required: false
  private _acceptAuthByCert?: string; 
  public get acceptAuthByCert() {
    return this.getStringAttribute('accept_auth_by_cert');
  }
  public set acceptAuthByCert(value: string) {
    this._acceptAuthByCert = value;
  }
  public resetAcceptAuthByCert() {
    this._acceptAuthByCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptAuthByCertInput() {
    return this._acceptAuthByCert;
  }

  // authorization_request_type - computed: true, optional: true, required: false
  private _authorizationRequestType?: string; 
  public get authorizationRequestType() {
    return this.getStringAttribute('authorization_request_type');
  }
  public set authorizationRequestType(value: string) {
    this._authorizationRequestType = value;
  }
  public resetAuthorizationRequestType() {
    this._authorizationRequestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationRequestTypeInput() {
    return this._authorizationRequestType;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // configuration_sync - computed: true, optional: true, required: false
  private _configurationSync?: string; 
  public get configurationSync() {
    return this.getStringAttribute('configuration_sync');
  }
  public set configurationSync(value: string) {
    this._configurationSync = value;
  }
  public resetConfigurationSync() {
    this._configurationSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationSyncInput() {
    return this._configurationSync;
  }

  // downstream_access - computed: true, optional: true, required: false
  private _downstreamAccess?: string; 
  public get downstreamAccess() {
    return this.getStringAttribute('downstream_access');
  }
  public set downstreamAccess(value: string) {
    this._downstreamAccess = value;
  }
  public resetDownstreamAccess() {
    this._downstreamAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamAccessInput() {
    return this._downstreamAccess;
  }

  // downstream_accprofile - computed: false, optional: true, required: false
  private _downstreamAccprofile?: string; 
  public get downstreamAccprofile() {
    return this.getStringAttribute('downstream_accprofile');
  }
  public set downstreamAccprofile(value: string) {
    this._downstreamAccprofile = value;
  }
  public resetDownstreamAccprofile() {
    this._downstreamAccprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downstreamAccprofileInput() {
    return this._downstreamAccprofile;
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

  // fabric_object_unification - computed: true, optional: true, required: false
  private _fabricObjectUnification?: string; 
  public get fabricObjectUnification() {
    return this.getStringAttribute('fabric_object_unification');
  }
  public set fabricObjectUnification(value: string) {
    this._fabricObjectUnification = value;
  }
  public resetFabricObjectUnification() {
    this._fabricObjectUnification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricObjectUnificationInput() {
    return this._fabricObjectUnification;
  }

  // fabric_workers - computed: true, optional: true, required: false
  private _fabricWorkers?: number; 
  public get fabricWorkers() {
    return this.getNumberAttribute('fabric_workers');
  }
  public set fabricWorkers(value: number) {
    this._fabricWorkers = value;
  }
  public resetFabricWorkers() {
    this._fabricWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricWorkersInput() {
    return this._fabricWorkers;
  }

  // file_mgmt - computed: true, optional: true, required: false
  private _fileMgmt?: string; 
  public get fileMgmt() {
    return this.getStringAttribute('file_mgmt');
  }
  public set fileMgmt(value: string) {
    this._fileMgmt = value;
  }
  public resetFileMgmt() {
    this._fileMgmt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileMgmtInput() {
    return this._fileMgmt;
  }

  // file_quota - computed: false, optional: true, required: false
  private _fileQuota?: number; 
  public get fileQuota() {
    return this.getNumberAttribute('file_quota');
  }
  public set fileQuota(value: number) {
    this._fileQuota = value;
  }
  public resetFileQuota() {
    this._fileQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileQuotaInput() {
    return this._fileQuota;
  }

  // file_quota_warning - computed: true, optional: true, required: false
  private _fileQuotaWarning?: number; 
  public get fileQuotaWarning() {
    return this.getNumberAttribute('file_quota_warning');
  }
  public set fileQuotaWarning(value: number) {
    this._fileQuotaWarning = value;
  }
  public resetFileQuotaWarning() {
    this._fileQuotaWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileQuotaWarningInput() {
    return this._fileQuotaWarning;
  }

  // fixed_key - computed: true, optional: true, required: false
  private _fixedKey?: string[]; 
  public get fixedKey() {
    return cdktf.Fn.tolist(this.getListAttribute('fixed_key'));
  }
  public set fixedKey(value: string[]) {
    this._fixedKey = value;
  }
  public resetFixedKey() {
    this._fixedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedKeyInput() {
    return this._fixedKey;
  }

  // forticloud_account_enforcement - computed: true, optional: true, required: false
  private _forticloudAccountEnforcement?: string; 
  public get forticloudAccountEnforcement() {
    return this.getStringAttribute('forticloud_account_enforcement');
  }
  public set forticloudAccountEnforcement(value: string) {
    this._forticloudAccountEnforcement = value;
  }
  public resetForticloudAccountEnforcement() {
    this._forticloudAccountEnforcement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticloudAccountEnforcementInput() {
    return this._forticloudAccountEnforcement;
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

  // group_password - computed: true, optional: true, required: false
  private _groupPassword?: string[]; 
  public get groupPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('group_password'));
  }
  public set groupPassword(value: string[]) {
    this._groupPassword = value;
  }
  public resetGroupPassword() {
    this._groupPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupPasswordInput() {
    return this._groupPassword;
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

  // log_unification - computed: true, optional: true, required: false
  private _logUnification?: string; 
  public get logUnification() {
    return this.getStringAttribute('log_unification');
  }
  public set logUnification(value: string) {
    this._logUnification = value;
  }
  public resetLogUnification() {
    this._logUnification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUnificationInput() {
    return this._logUnification;
  }

  // saml_configuration_sync - computed: true, optional: true, required: false
  private _samlConfigurationSync?: string; 
  public get samlConfigurationSync() {
    return this.getStringAttribute('saml_configuration_sync');
  }
  public set samlConfigurationSync(value: string) {
    this._samlConfigurationSync = value;
  }
  public resetSamlConfigurationSync() {
    this._samlConfigurationSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlConfigurationSyncInput() {
    return this._samlConfigurationSync;
  }

  // ssl_protocol - computed: true, optional: true, required: false
  private _sslProtocol?: string; 
  public get sslProtocol() {
    return this.getStringAttribute('ssl_protocol');
  }
  public set sslProtocol(value: string) {
    this._sslProtocol = value;
  }
  public resetSslProtocol() {
    this._sslProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol;
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

  // upstream - computed: false, optional: true, required: false
  private _upstream?: string; 
  public get upstream() {
    return this.getStringAttribute('upstream');
  }
  public set upstream(value: string) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream;
  }

  // upstream_confirm - computed: true, optional: true, required: false
  private _upstreamConfirm?: string; 
  public get upstreamConfirm() {
    return this.getStringAttribute('upstream_confirm');
  }
  public set upstreamConfirm(value: string) {
    this._upstreamConfirm = value;
  }
  public resetUpstreamConfirm() {
    this._upstreamConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamConfirmInput() {
    return this._upstreamConfirm;
  }

  // upstream_port - computed: true, optional: true, required: false
  private _upstreamPort?: number; 
  public get upstreamPort() {
    return this.getNumberAttribute('upstream_port');
  }
  public set upstreamPort(value: number) {
    this._upstreamPort = value;
  }
  public resetUpstreamPort() {
    this._upstreamPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamPortInput() {
    return this._upstreamPort;
  }

  // fabric_connector - computed: false, optional: true, required: false
  private _fabricConnector = new SystemCsfFabricConnectorList(this, "fabric_connector", false);
  public get fabricConnector() {
    return this._fabricConnector;
  }
  public putFabricConnector(value: SystemCsfFabricConnector[] | cdktf.IResolvable) {
    this._fabricConnector.internalValue = value;
  }
  public resetFabricConnector() {
    this._fabricConnector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricConnectorInput() {
    return this._fabricConnector.internalValue;
  }

  // trusted_list - computed: false, optional: true, required: false
  private _trustedList = new SystemCsfTrustedListStructList(this, "trusted_list", false);
  public get trustedList() {
    return this._trustedList;
  }
  public putTrustedList(value: SystemCsfTrustedListStruct[] | cdktf.IResolvable) {
    this._trustedList.internalValue = value;
  }
  public resetTrustedList() {
    this._trustedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedListInput() {
    return this._trustedList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accept_auth_by_cert: cdktf.stringToTerraform(this._acceptAuthByCert),
      authorization_request_type: cdktf.stringToTerraform(this._authorizationRequestType),
      certificate: cdktf.stringToTerraform(this._certificate),
      configuration_sync: cdktf.stringToTerraform(this._configurationSync),
      downstream_access: cdktf.stringToTerraform(this._downstreamAccess),
      downstream_accprofile: cdktf.stringToTerraform(this._downstreamAccprofile),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fabric_object_unification: cdktf.stringToTerraform(this._fabricObjectUnification),
      fabric_workers: cdktf.numberToTerraform(this._fabricWorkers),
      file_mgmt: cdktf.stringToTerraform(this._fileMgmt),
      file_quota: cdktf.numberToTerraform(this._fileQuota),
      file_quota_warning: cdktf.numberToTerraform(this._fileQuotaWarning),
      fixed_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fixedKey),
      forticloud_account_enforcement: cdktf.stringToTerraform(this._forticloudAccountEnforcement),
      group_name: cdktf.stringToTerraform(this._groupName),
      group_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupPassword),
      id: cdktf.stringToTerraform(this._id),
      log_unification: cdktf.stringToTerraform(this._logUnification),
      saml_configuration_sync: cdktf.stringToTerraform(this._samlConfigurationSync),
      ssl_protocol: cdktf.stringToTerraform(this._sslProtocol),
      status: cdktf.stringToTerraform(this._status),
      upstream: cdktf.stringToTerraform(this._upstream),
      upstream_confirm: cdktf.stringToTerraform(this._upstreamConfirm),
      upstream_port: cdktf.numberToTerraform(this._upstreamPort),
      fabric_connector: cdktf.listMapper(systemCsfFabricConnectorToTerraform, true)(this._fabricConnector.internalValue),
      trusted_list: cdktf.listMapper(systemCsfTrustedListStructToTerraform, true)(this._trustedList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accept_auth_by_cert: {
        value: cdktf.stringToHclTerraform(this._acceptAuthByCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_request_type: {
        value: cdktf.stringToHclTerraform(this._authorizationRequestType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate: {
        value: cdktf.stringToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_sync: {
        value: cdktf.stringToHclTerraform(this._configurationSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downstream_access: {
        value: cdktf.stringToHclTerraform(this._downstreamAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      downstream_accprofile: {
        value: cdktf.stringToHclTerraform(this._downstreamAccprofile),
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
      fabric_object_unification: {
        value: cdktf.stringToHclTerraform(this._fabricObjectUnification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fabric_workers: {
        value: cdktf.numberToHclTerraform(this._fabricWorkers),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_mgmt: {
        value: cdktf.stringToHclTerraform(this._fileMgmt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      file_quota: {
        value: cdktf.numberToHclTerraform(this._fileQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      file_quota_warning: {
        value: cdktf.numberToHclTerraform(this._fileQuotaWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fixed_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fixedKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      forticloud_account_enforcement: {
        value: cdktf.stringToHclTerraform(this._forticloudAccountEnforcement),
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
      group_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_unification: {
        value: cdktf.stringToHclTerraform(this._logUnification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saml_configuration_sync: {
        value: cdktf.stringToHclTerraform(this._samlConfigurationSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_protocol: {
        value: cdktf.stringToHclTerraform(this._sslProtocol),
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
      upstream: {
        value: cdktf.stringToHclTerraform(this._upstream),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_confirm: {
        value: cdktf.stringToHclTerraform(this._upstreamConfirm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_port: {
        value: cdktf.numberToHclTerraform(this._upstreamPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fabric_connector: {
        value: cdktf.listMapperHcl(systemCsfFabricConnectorToHclTerraform, true)(this._fabricConnector.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemCsfFabricConnectorList",
      },
      trusted_list: {
        value: cdktf.listMapperHcl(systemCsfTrustedListStructToHclTerraform, true)(this._trustedList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemCsfTrustedListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
