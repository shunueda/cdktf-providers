// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformGitopsGnupgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account Identifier for the GnuPG Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#account_id DataHarnessPlatformGitopsGnupg#account_id}
  */
  readonly accountId?: string;
  /**
  * Agent identifier for the GnuPG Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#agent_id DataHarnessPlatformGitopsGnupg#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#id DataHarnessPlatformGitopsGnupg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier for the GnuPG Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#identifier DataHarnessPlatformGitopsGnupg#identifier}
  */
  readonly identifier: string;
  /**
  * Organization Identifier for the GnuPG Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#org_id DataHarnessPlatformGitopsGnupg#org_id}
  */
  readonly orgId?: string;
  /**
  * Project Identifier for the GnuPG Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#project_id DataHarnessPlatformGitopsGnupg#project_id}
  */
  readonly projectId?: string;
  /**
  * request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#request DataHarnessPlatformGitopsGnupg#request}
  */
  readonly request?: DataHarnessPlatformGitopsGnupgRequest[] | cdktf.IResolvable;
}
export interface DataHarnessPlatformGitopsGnupgRequestPublickey {
  /**
  * Fingerprint is the fingerprint of the key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#fingerprint DataHarnessPlatformGitopsGnupg#fingerprint}
  */
  readonly fingerprint?: string;
  /**
  * KeyData holds the raw key data, in base64 encoded format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#key_data DataHarnessPlatformGitopsGnupg#key_data}
  */
  readonly keyData?: string;
  /**
  * KeyID specifies the key ID, in hexadecimal string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#key_id DataHarnessPlatformGitopsGnupg#key_id}
  */
  readonly keyId?: string;
  /**
  * Owner holds the owner identification, e.g. a name and e-mail address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#owner DataHarnessPlatformGitopsGnupg#owner}
  */
  readonly owner?: string;
  /**
  * SubType holds the key's sub type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#sub_type DataHarnessPlatformGitopsGnupg#sub_type}
  */
  readonly subType?: string;
  /**
  * Trust holds the level of trust assigned to this key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#trust DataHarnessPlatformGitopsGnupg#trust}
  */
  readonly trust?: string;
}

export function dataHarnessPlatformGitopsGnupgRequestPublickeyToTerraform(struct?: DataHarnessPlatformGitopsGnupgRequestPublickey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fingerprint: cdktf.stringToTerraform(struct!.fingerprint),
    key_data: cdktf.stringToTerraform(struct!.keyData),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    owner: cdktf.stringToTerraform(struct!.owner),
    sub_type: cdktf.stringToTerraform(struct!.subType),
    trust: cdktf.stringToTerraform(struct!.trust),
  }
}


export function dataHarnessPlatformGitopsGnupgRequestPublickeyToHclTerraform(struct?: DataHarnessPlatformGitopsGnupgRequestPublickey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.fingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_data: {
      value: cdktf.stringToHclTerraform(struct!.keyData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_type: {
      value: cdktf.stringToHclTerraform(struct!.subType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust: {
      value: cdktf.stringToHclTerraform(struct!.trust),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformGitopsGnupgRequestPublickeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsGnupgRequestPublickey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprint = this._fingerprint;
    }
    if (this._keyData !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyData = this._keyData;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._subType !== undefined) {
      hasAnyValues = true;
      internalValueResult.subType = this._subType;
    }
    if (this._trust !== undefined) {
      hasAnyValues = true;
      internalValueResult.trust = this._trust;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsGnupgRequestPublickey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fingerprint = undefined;
      this._keyData = undefined;
      this._keyId = undefined;
      this._owner = undefined;
      this._subType = undefined;
      this._trust = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fingerprint = value.fingerprint;
      this._keyData = value.keyData;
      this._keyId = value.keyId;
      this._owner = value.owner;
      this._subType = value.subType;
      this._trust = value.trust;
    }
  }

  // fingerprint - computed: false, optional: true, required: false
  private _fingerprint?: string; 
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }
  public set fingerprint(value: string) {
    this._fingerprint = value;
  }
  public resetFingerprint() {
    this._fingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintInput() {
    return this._fingerprint;
  }

  // key_data - computed: false, optional: true, required: false
  private _keyData?: string; 
  public get keyData() {
    return this.getStringAttribute('key_data');
  }
  public set keyData(value: string) {
    this._keyData = value;
  }
  public resetKeyData() {
    this._keyData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDataInput() {
    return this._keyData;
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // sub_type - computed: false, optional: true, required: false
  private _subType?: string; 
  public get subType() {
    return this.getStringAttribute('sub_type');
  }
  public set subType(value: string) {
    this._subType = value;
  }
  public resetSubType() {
    this._subType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTypeInput() {
    return this._subType;
  }

  // trust - computed: false, optional: true, required: false
  private _trust?: string; 
  public get trust() {
    return this.getStringAttribute('trust');
  }
  public set trust(value: string) {
    this._trust = value;
  }
  public resetTrust() {
    this._trust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustInput() {
    return this._trust;
  }
}

export class DataHarnessPlatformGitopsGnupgRequestPublickeyList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformGitopsGnupgRequestPublickey[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformGitopsGnupgRequestPublickeyOutputReference {
    return new DataHarnessPlatformGitopsGnupgRequestPublickeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformGitopsGnupgRequest {
  /**
  * Indicates if the GnuPG Key should be inserted if not present or updated if present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#upsert DataHarnessPlatformGitopsGnupg#upsert}
  */
  readonly upsert?: boolean | cdktf.IResolvable;
  /**
  * publickey block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#publickey DataHarnessPlatformGitopsGnupg#publickey}
  */
  readonly publickey?: DataHarnessPlatformGitopsGnupgRequestPublickey[] | cdktf.IResolvable;
}

export function dataHarnessPlatformGitopsGnupgRequestToTerraform(struct?: DataHarnessPlatformGitopsGnupgRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    upsert: cdktf.booleanToTerraform(struct!.upsert),
    publickey: cdktf.listMapper(dataHarnessPlatformGitopsGnupgRequestPublickeyToTerraform, true)(struct!.publickey),
  }
}


export function dataHarnessPlatformGitopsGnupgRequestToHclTerraform(struct?: DataHarnessPlatformGitopsGnupgRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    upsert: {
      value: cdktf.booleanToHclTerraform(struct!.upsert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    publickey: {
      value: cdktf.listMapperHcl(dataHarnessPlatformGitopsGnupgRequestPublickeyToHclTerraform, true)(struct!.publickey),
      isBlock: true,
      type: "list",
      storageClassType: "DataHarnessPlatformGitopsGnupgRequestPublickeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformGitopsGnupgRequestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformGitopsGnupgRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._upsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.upsert = this._upsert;
    }
    if (this._publickey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publickey = this._publickey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformGitopsGnupgRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._upsert = undefined;
      this._publickey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._upsert = value.upsert;
      this._publickey.internalValue = value.publickey;
    }
  }

  // upsert - computed: false, optional: true, required: false
  private _upsert?: boolean | cdktf.IResolvable; 
  public get upsert() {
    return this.getBooleanAttribute('upsert');
  }
  public set upsert(value: boolean | cdktf.IResolvable) {
    this._upsert = value;
  }
  public resetUpsert() {
    this._upsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsertInput() {
    return this._upsert;
  }

  // publickey - computed: false, optional: true, required: false
  private _publickey = new DataHarnessPlatformGitopsGnupgRequestPublickeyList(this, "publickey", false);
  public get publickey() {
    return this._publickey;
  }
  public putPublickey(value: DataHarnessPlatformGitopsGnupgRequestPublickey[] | cdktf.IResolvable) {
    this._publickey.internalValue = value;
  }
  public resetPublickey() {
    this._publickey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publickeyInput() {
    return this._publickey.internalValue;
  }
}

export class DataHarnessPlatformGitopsGnupgRequestList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformGitopsGnupgRequest[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformGitopsGnupgRequestOutputReference {
    return new DataHarnessPlatformGitopsGnupgRequestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg harness_platform_gitops_gnupg}
*/
export class DataHarnessPlatformGitopsGnupg extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_gitops_gnupg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformGitopsGnupg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformGitopsGnupg to import
  * @param importFromId The id of the existing DataHarnessPlatformGitopsGnupg that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformGitopsGnupg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_gitops_gnupg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_gitops_gnupg harness_platform_gitops_gnupg} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformGitopsGnupgConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformGitopsGnupgConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_gitops_gnupg',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._agentId = config.agentId;
    this._id = config.id;
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._request.internalValue = config.request;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // request - computed: false, optional: true, required: false
  private _request = new DataHarnessPlatformGitopsGnupgRequestList(this, "request", false);
  public get request() {
    return this._request;
  }
  public putRequest(value: DataHarnessPlatformGitopsGnupgRequest[] | cdktf.IResolvable) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      agent_id: cdktf.stringToTerraform(this._agentId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      request: cdktf.listMapper(dataHarnessPlatformGitopsGnupgRequestToTerraform, true)(this._request.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request: {
        value: cdktf.listMapperHcl(dataHarnessPlatformGitopsGnupgRequestToHclTerraform, true)(this._request.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataHarnessPlatformGitopsGnupgRequestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
