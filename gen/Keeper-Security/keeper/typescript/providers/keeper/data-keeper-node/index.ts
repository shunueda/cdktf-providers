// https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeeperNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Root Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/node#is_root DataKeeperNode#is_root}
  */
  readonly isRoot?: boolean | cdktf.IResolvable;
  /**
  * Node Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/node#name DataKeeperNode#name}
  */
  readonly name?: string;
  /**
  * Node ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/node#node_id DataKeeperNode#node_id}
  */
  readonly nodeId?: number;
  /**
  * Parent Node ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/node#parent_id DataKeeperNode#parent_id}
  */
  readonly parentId?: number;
}
export interface DataKeeperNodeBridge {
}

export function dataKeeperNodeBridgeToTerraform(struct?: DataKeeperNodeBridge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeeperNodeBridgeToHclTerraform(struct?: DataKeeperNodeBridge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeeperNodeBridgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperNodeBridge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperNodeBridge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bridge_id - computed: true, optional: false, required: false
  public get bridgeId() {
    return this.getNumberAttribute('bridge_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataKeeperNodeScim {
}

export function dataKeeperNodeScimToTerraform(struct?: DataKeeperNodeScim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeeperNodeScimToHclTerraform(struct?: DataKeeperNodeScim): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeeperNodeScimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperNodeScim | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperNodeScim | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role_prefix - computed: true, optional: false, required: false
  public get rolePrefix() {
    return this.getStringAttribute('role_prefix');
  }

  // scim_id - computed: true, optional: false, required: false
  public get scimId() {
    return this.getNumberAttribute('scim_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface DataKeeperNodeSsoProviderInCloud {
}

export function dataKeeperNodeSsoProviderInCloudToTerraform(struct?: DataKeeperNodeSsoProviderInCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeeperNodeSsoProviderInCloudToHclTerraform(struct?: DataKeeperNodeSsoProviderInCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeeperNodeSsoProviderInCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperNodeSsoProviderInCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperNodeSsoProviderInCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getNumberAttribute('provider_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}
export interface DataKeeperNodeSsoProviderOnPremise {
}

export function dataKeeperNodeSsoProviderOnPremiseToTerraform(struct?: DataKeeperNodeSsoProviderOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeeperNodeSsoProviderOnPremiseToHclTerraform(struct?: DataKeeperNodeSsoProviderOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeeperNodeSsoProviderOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataKeeperNodeSsoProviderOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeeperNodeSsoProviderOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // provider_id - computed: true, optional: false, required: false
  public get providerId() {
    return this.getNumberAttribute('provider_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/node keeper_node}
*/
export class DataKeeperNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keeper_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeeperNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeeperNode to import
  * @param importFromId The id of the existing DataKeeperNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeeperNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keeper_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keeper-security/keeper/1.2.0/docs/data-sources/node keeper_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeeperNodeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataKeeperNodeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keeper_node',
      terraformGeneratorMetadata: {
        providerName: 'keeper',
        providerVersion: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._isRoot = config.isRoot;
    this._name = config.name;
    this._nodeId = config.nodeId;
    this._parentId = config.parentId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bridge - computed: true, optional: false, required: false
  private _bridge = new DataKeeperNodeBridgeOutputReference(this, "bridge");
  public get bridge() {
    return this._bridge;
  }

  // duo_enabled - computed: true, optional: false, required: false
  public get duoEnabled() {
    return this.getBooleanAttribute('duo_enabled');
  }

  // is_root - computed: true, optional: true, required: false
  private _isRoot?: boolean | cdktf.IResolvable; 
  public get isRoot() {
    return this.getBooleanAttribute('is_root');
  }
  public set isRoot(value: boolean | cdktf.IResolvable) {
    this._isRoot = value;
  }
  public resetIsRoot() {
    this._isRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRootInput() {
    return this._isRoot;
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

  // node_id - computed: true, optional: true, required: false
  private _nodeId?: number; 
  public get nodeId() {
    return this.getNumberAttribute('node_id');
  }
  public set nodeId(value: number) {
    this._nodeId = value;
  }
  public resetNodeId() {
    this._nodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: number; 
  public get parentId() {
    return this.getNumberAttribute('parent_id');
  }
  public set parentId(value: number) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // restrict_visibility - computed: true, optional: false, required: false
  public get restrictVisibility() {
    return this.getBooleanAttribute('restrict_visibility');
  }

  // rsa_enabled - computed: true, optional: false, required: false
  public get rsaEnabled() {
    return this.getBooleanAttribute('rsa_enabled');
  }

  // scim - computed: true, optional: false, required: false
  private _scim = new DataKeeperNodeScimOutputReference(this, "scim");
  public get scim() {
    return this._scim;
  }

  // sso_provider_in_cloud - computed: true, optional: false, required: false
  private _ssoProviderInCloud = new DataKeeperNodeSsoProviderInCloudOutputReference(this, "sso_provider_in_cloud");
  public get ssoProviderInCloud() {
    return this._ssoProviderInCloud;
  }

  // sso_provider_on_premise - computed: true, optional: false, required: false
  private _ssoProviderOnPremise = new DataKeeperNodeSsoProviderOnPremiseOutputReference(this, "sso_provider_on_premise");
  public get ssoProviderOnPremise() {
    return this._ssoProviderOnPremise;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      is_root: cdktf.booleanToTerraform(this._isRoot),
      name: cdktf.stringToTerraform(this._name),
      node_id: cdktf.numberToTerraform(this._nodeId),
      parent_id: cdktf.numberToTerraform(this._parentId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      is_root: {
        value: cdktf.booleanToHclTerraform(this._isRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_id: {
        value: cdktf.numberToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parent_id: {
        value: cdktf.numberToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
