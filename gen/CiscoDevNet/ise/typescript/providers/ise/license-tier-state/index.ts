// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/license_tier_state
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LicenseTierStateConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of licenses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/license_tier_state#licenses LicenseTierState#licenses}
  */
  readonly licenses: LicenseTierStateLicenses[] | cdktf.IResolvable;
}
export interface LicenseTierStateLicenses {
  /**
  * License name
  *   - Choices: `ESSENTIAL`, `ADVANTAGE`, `PREMIER`, `DEVICEADMIN`, `VM`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/license_tier_state#name LicenseTierState#name}
  */
  readonly name: string;
  /**
  * License status
  *   - Choices: `ENABLED`, `DISABLED`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/license_tier_state#status LicenseTierState#status}
  */
  readonly status: string;
}

export function licenseTierStateLicensesToTerraform(struct?: LicenseTierStateLicenses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function licenseTierStateLicensesToHclTerraform(struct?: LicenseTierStateLicenses | cdktf.IResolvable): any {
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
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LicenseTierStateLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LicenseTierStateLicenses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LicenseTierStateLicenses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._status = value.status;
    }
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

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class LicenseTierStateLicensesList extends cdktf.ComplexList {
  public internalValue? : LicenseTierStateLicenses[] | cdktf.IResolvable

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
  public get(index: number): LicenseTierStateLicensesOutputReference {
    return new LicenseTierStateLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/license_tier_state ise_license_tier_state}
*/
export class LicenseTierState extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_license_tier_state";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LicenseTierState resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LicenseTierState to import
  * @param importFromId The id of the existing LicenseTierState that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/license_tier_state#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LicenseTierState to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_license_tier_state", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/license_tier_state ise_license_tier_state} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LicenseTierStateConfig
  */
  public constructor(scope: Construct, id: string, config: LicenseTierStateConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_license_tier_state',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._licenses.internalValue = config.licenses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // licenses - computed: false, optional: false, required: true
  private _licenses = new LicenseTierStateLicensesList(this, "licenses", false);
  public get licenses() {
    return this._licenses;
  }
  public putLicenses(value: LicenseTierStateLicenses[] | cdktf.IResolvable) {
    this._licenses.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licensesInput() {
    return this._licenses.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      licenses: cdktf.listMapper(licenseTierStateLicensesToTerraform, false)(this._licenses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      licenses: {
        value: cdktf.listMapperHcl(licenseTierStateLicensesToHclTerraform, false)(this._licenses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LicenseTierStateLicensesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
