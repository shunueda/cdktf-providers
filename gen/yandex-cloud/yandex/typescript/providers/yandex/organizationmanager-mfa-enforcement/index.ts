// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationmanagerMfaEnforcementConfig extends cdktf.TerraformMetaArguments {
  /**
  * acr id of the MFA enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#acr_id OrganizationmanagerMfaEnforcement#acr_id}
  */
  readonly acrId: string;
  /**
  * the MFA enforcement application start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#apply_at OrganizationmanagerMfaEnforcement#apply_at}
  */
  readonly applyAt?: string;
  /**
  * description of the MFA enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#description OrganizationmanagerMfaEnforcement#description}
  */
  readonly description?: string;
  /**
  * the time window during which the user is allowed to create an MFA profile. 
  *  this window is measured relative to the MFA enforcement application start time
  *  and the user's most recent successful authentication that falls under the rule 
  *  (or the user's creation time, if there has been no authentication).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#enroll_window OrganizationmanagerMfaEnforcement#enroll_window}
  */
  readonly enrollWindow: string;
  /**
  * id of the MFA enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#id OrganizationmanagerMfaEnforcement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * id of the MFA enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#mfa_enforcement_id OrganizationmanagerMfaEnforcement#mfa_enforcement_id}
  */
  readonly mfaEnforcementId?: string;
  /**
  * name of the MFA enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#name OrganizationmanagerMfaEnforcement#name}
  */
  readonly name: string;
  /**
  * organization id of the MFA enforcement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#organization_id OrganizationmanagerMfaEnforcement#organization_id}
  */
  readonly organizationId: string;
  /**
  * MFA enforcement status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#status OrganizationmanagerMfaEnforcement#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#timeouts OrganizationmanagerMfaEnforcement#timeouts}
  */
  readonly timeouts?: OrganizationmanagerMfaEnforcementTimeouts;
  /**
  * the period during which the entered MFA factor is considered valid and the 
  *  corresponding acr is regarded as satisfied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#ttl OrganizationmanagerMfaEnforcement#ttl}
  */
  readonly ttl: string;
}
export interface OrganizationmanagerMfaEnforcementTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#create OrganizationmanagerMfaEnforcement#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#delete OrganizationmanagerMfaEnforcement#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#read OrganizationmanagerMfaEnforcement#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#update OrganizationmanagerMfaEnforcement#update}
  */
  readonly update?: string;
}

export function organizationmanagerMfaEnforcementTimeoutsToTerraform(struct?: OrganizationmanagerMfaEnforcementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function organizationmanagerMfaEnforcementTimeoutsToHclTerraform(struct?: OrganizationmanagerMfaEnforcementTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class OrganizationmanagerMfaEnforcementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrganizationmanagerMfaEnforcementTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationmanagerMfaEnforcementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement yandex_organizationmanager_mfa_enforcement}
*/
export class OrganizationmanagerMfaEnforcement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_organizationmanager_mfa_enforcement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationmanagerMfaEnforcement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationmanagerMfaEnforcement to import
  * @param importFromId The id of the existing OrganizationmanagerMfaEnforcement that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationmanagerMfaEnforcement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_organizationmanager_mfa_enforcement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/resources/organizationmanager_mfa_enforcement yandex_organizationmanager_mfa_enforcement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationmanagerMfaEnforcementConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationmanagerMfaEnforcementConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_organizationmanager_mfa_enforcement',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acrId = config.acrId;
    this._applyAt = config.applyAt;
    this._description = config.description;
    this._enrollWindow = config.enrollWindow;
    this._id = config.id;
    this._mfaEnforcementId = config.mfaEnforcementId;
    this._name = config.name;
    this._organizationId = config.organizationId;
    this._status = config.status;
    this._timeouts.internalValue = config.timeouts;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acr_id - computed: false, optional: false, required: true
  private _acrId?: string; 
  public get acrId() {
    return this.getStringAttribute('acr_id');
  }
  public set acrId(value: string) {
    this._acrId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acrIdInput() {
    return this._acrId;
  }

  // apply_at - computed: true, optional: true, required: false
  private _applyAt?: string; 
  public get applyAt() {
    return this.getStringAttribute('apply_at');
  }
  public set applyAt(value: string) {
    this._applyAt = value;
  }
  public resetApplyAt() {
    this._applyAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyAtInput() {
    return this._applyAt;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // enroll_window - computed: false, optional: false, required: true
  private _enrollWindow?: string; 
  public get enrollWindow() {
    return this.getStringAttribute('enroll_window');
  }
  public set enrollWindow(value: string) {
    this._enrollWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollWindowInput() {
    return this._enrollWindow;
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

  // mfa_enforcement_id - computed: true, optional: true, required: false
  private _mfaEnforcementId?: string; 
  public get mfaEnforcementId() {
    return this.getStringAttribute('mfa_enforcement_id');
  }
  public set mfaEnforcementId(value: string) {
    this._mfaEnforcementId = value;
  }
  public resetMfaEnforcementId() {
    this._mfaEnforcementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaEnforcementIdInput() {
    return this._mfaEnforcementId;
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrganizationmanagerMfaEnforcementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrganizationmanagerMfaEnforcementTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: string; 
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
  public set ttl(value: string) {
    this._ttl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acr_id: cdktf.stringToTerraform(this._acrId),
      apply_at: cdktf.stringToTerraform(this._applyAt),
      description: cdktf.stringToTerraform(this._description),
      enroll_window: cdktf.stringToTerraform(this._enrollWindow),
      id: cdktf.stringToTerraform(this._id),
      mfa_enforcement_id: cdktf.stringToTerraform(this._mfaEnforcementId),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      status: cdktf.stringToTerraform(this._status),
      timeouts: organizationmanagerMfaEnforcementTimeoutsToTerraform(this._timeouts.internalValue),
      ttl: cdktf.stringToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acr_id: {
        value: cdktf.stringToHclTerraform(this._acrId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apply_at: {
        value: cdktf.stringToHclTerraform(this._applyAt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enroll_window: {
        value: cdktf.stringToHclTerraform(this._enrollWindow),
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
      mfa_enforcement_id: {
        value: cdktf.stringToHclTerraform(this._mfaEnforcementId),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
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
      timeouts: {
        value: organizationmanagerMfaEnforcementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrganizationmanagerMfaEnforcementTimeouts",
      },
      ttl: {
        value: cdktf.stringToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
