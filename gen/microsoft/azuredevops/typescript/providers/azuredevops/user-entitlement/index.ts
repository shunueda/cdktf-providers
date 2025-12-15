// https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserEntitlementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#account_license_type UserEntitlement#account_license_type}
  */
  readonly accountLicenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#id UserEntitlement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#licensing_source UserEntitlement#licensing_source}
  */
  readonly licensingSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#origin UserEntitlement#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#origin_id UserEntitlement#origin_id}
  */
  readonly originId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#principal_name UserEntitlement#principal_name}
  */
  readonly principalName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#timeouts UserEntitlement#timeouts}
  */
  readonly timeouts?: UserEntitlementTimeouts;
}
export interface UserEntitlementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#create UserEntitlement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#delete UserEntitlement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#read UserEntitlement#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#update UserEntitlement#update}
  */
  readonly update?: string;
}

export function userEntitlementTimeoutsToTerraform(struct?: UserEntitlementTimeouts | cdktf.IResolvable): any {
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


export function userEntitlementTimeoutsToHclTerraform(struct?: UserEntitlementTimeouts | cdktf.IResolvable): any {
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

export class UserEntitlementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserEntitlementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserEntitlementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement azuredevops_user_entitlement}
*/
export class UserEntitlement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_user_entitlement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserEntitlement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserEntitlement to import
  * @param importFromId The id of the existing UserEntitlement that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserEntitlement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_user_entitlement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.12.1/docs/resources/user_entitlement azuredevops_user_entitlement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserEntitlementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UserEntitlementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_user_entitlement',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.12.1',
        providerVersionConstraint: '1.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountLicenseType = config.accountLicenseType;
    this._id = config.id;
    this._licensingSource = config.licensingSource;
    this._origin = config.origin;
    this._originId = config.originId;
    this._principalName = config.principalName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_license_type - computed: false, optional: true, required: false
  private _accountLicenseType?: string; 
  public get accountLicenseType() {
    return this.getStringAttribute('account_license_type');
  }
  public set accountLicenseType(value: string) {
    this._accountLicenseType = value;
  }
  public resetAccountLicenseType() {
    this._accountLicenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLicenseTypeInput() {
    return this._accountLicenseType;
  }

  // descriptor - computed: true, optional: false, required: false
  public get descriptor() {
    return this.getStringAttribute('descriptor');
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

  // licensing_source - computed: false, optional: true, required: false
  private _licensingSource?: string; 
  public get licensingSource() {
    return this.getStringAttribute('licensing_source');
  }
  public set licensingSource(value: string) {
    this._licensingSource = value;
  }
  public resetLicensingSource() {
    this._licensingSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licensingSourceInput() {
    return this._licensingSource;
  }

  // origin - computed: true, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // origin_id - computed: true, optional: true, required: false
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  public resetOriginId() {
    this._originId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // principal_name - computed: true, optional: true, required: false
  private _principalName?: string; 
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }
  public set principalName(value: string) {
    this._principalName = value;
  }
  public resetPrincipalName() {
    this._principalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalNameInput() {
    return this._principalName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new UserEntitlementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: UserEntitlementTimeouts) {
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
      account_license_type: cdktf.stringToTerraform(this._accountLicenseType),
      id: cdktf.stringToTerraform(this._id),
      licensing_source: cdktf.stringToTerraform(this._licensingSource),
      origin: cdktf.stringToTerraform(this._origin),
      origin_id: cdktf.stringToTerraform(this._originId),
      principal_name: cdktf.stringToTerraform(this._principalName),
      timeouts: userEntitlementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_license_type: {
        value: cdktf.stringToHclTerraform(this._accountLicenseType),
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
      licensing_source: {
        value: cdktf.stringToHclTerraform(this._licensingSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_id: {
        value: cdktf.stringToHclTerraform(this._originId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_name: {
        value: cdktf.stringToHclTerraform(this._principalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: userEntitlementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserEntitlementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
