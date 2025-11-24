// https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformDelegatetokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account Identifier for the Entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#account_id PlatformDelegatetoken#account_id}
  */
  readonly accountId: string;
  /**
  * Time when the delegate token is created. This is an epoch timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#created_at PlatformDelegatetoken#created_at}
  */
  readonly createdAt?: number;
  /**
  * created by details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#created_by PlatformDelegatetoken#created_by}
  */
  readonly createdBy?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#id PlatformDelegatetoken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the delegate token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#name PlatformDelegatetoken#name}
  */
  readonly name: string;
  /**
  * Org Identifier for the Entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#org_id PlatformDelegatetoken#org_id}
  */
  readonly orgId?: string;
  /**
  * Project Identifier for the Entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#project_id PlatformDelegatetoken#project_id}
  */
  readonly projectId?: string;
  /**
  * Epoch time in milliseconds after which the token will be marked as revoked. There can be a delay of up to one hour from the epoch value provided and actual revoking of the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#revoke_after PlatformDelegatetoken#revoke_after}
  */
  readonly revokeAfter?: number;
  /**
  * Status of Delegate Token (ACTIVE or REVOKED). If left empty both active and revoked tokens will be assumed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#token_status PlatformDelegatetoken#token_status}
  */
  readonly tokenStatus?: string;
  /**
  * Value of the delegate token. Encoded in base64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#value PlatformDelegatetoken#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken harness_platform_delegatetoken}
*/
export class PlatformDelegatetoken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_delegatetoken";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformDelegatetoken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformDelegatetoken to import
  * @param importFromId The id of the existing PlatformDelegatetoken that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformDelegatetoken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_delegatetoken", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.3/docs/resources/platform_delegatetoken harness_platform_delegatetoken} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformDelegatetokenConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformDelegatetokenConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_delegatetoken',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.3',
        providerVersionConstraint: '0.39.3'
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
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._revokeAfter = config.revokeAfter;
    this._tokenStatus = config.tokenStatus;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: { [key: string]: string }; 
  public get createdBy() {
    return this.getStringMapAttribute('created_by');
  }
  public set createdBy(value: { [key: string]: string }) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // revoke_after - computed: false, optional: true, required: false
  private _revokeAfter?: number; 
  public get revokeAfter() {
    return this.getNumberAttribute('revoke_after');
  }
  public set revokeAfter(value: number) {
    this._revokeAfter = value;
  }
  public resetRevokeAfter() {
    this._revokeAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeAfterInput() {
    return this._revokeAfter;
  }

  // token_status - computed: true, optional: true, required: false
  private _tokenStatus?: string; 
  public get tokenStatus() {
    return this.getStringAttribute('token_status');
  }
  public set tokenStatus(value: string) {
    this._tokenStatus = value;
  }
  public resetTokenStatus() {
    this._tokenStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenStatusInput() {
    return this._tokenStatus;
  }

  // value - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      created_by: cdktf.hashMapper(cdktf.stringToTerraform)(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      revoke_after: cdktf.numberToTerraform(this._revokeAfter),
      token_status: cdktf.stringToTerraform(this._tokenStatus),
      value: cdktf.stringToTerraform(this._value),
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
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      created_by: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._createdBy),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
      revoke_after: {
        value: cdktf.numberToHclTerraform(this._revokeAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token_status: {
        value: cdktf.stringToHclTerraform(this._tokenStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
