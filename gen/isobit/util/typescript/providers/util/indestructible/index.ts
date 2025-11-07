// https://registry.terraform.io/providers/isobit/util/0.0.4/docs/resources/indestructible
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IndestructibleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow destruction when `bypass_indestructible` is set on the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs/resources/indestructible#allow_bypass Indestructible#allow_bypass}
  */
  readonly allowBypass?: boolean | cdktf.IResolvable;
  /**
  * Whether to allow destruction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs/resources/indestructible#allow_destroy Indestructible#allow_destroy}
  */
  readonly allowDestroy?: boolean | cdktf.IResolvable;
  /**
  * Additional message to include in the error message when attempting to destroy when `allow_destroy` is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs/resources/indestructible#error_message Indestructible#error_message}
  */
  readonly errorMessage?: string;
  /**
  * The protected value can be any attribute of the protected resource that would change under replacement. The resource can be also be protected using an explicit `depends_on`, but in that case the resource also needs to have `prevent_destroy = true` in the lifecycle configuration to prevent destruction during replacement. Using protected_value simultaneously implies the dependency relationship, and protects against destruction during replacement by causing the indestructible resource itself to also be replaced when the protected resource is replaced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs/resources/indestructible#protected_value Indestructible#protected_value}
  */
  readonly protectedValue?: { [key: string]: any };
}

/**
* Represents a {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs/resources/indestructible util_indestructible}
*/
export class Indestructible extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "util_indestructible";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Indestructible resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Indestructible to import
  * @param importFromId The id of the existing Indestructible that should be imported. Refer to the {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs/resources/indestructible#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Indestructible to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "util_indestructible", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/isobit/util/0.0.4/docs/resources/indestructible util_indestructible} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IndestructibleConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IndestructibleConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'util_indestructible',
      terraformGeneratorMetadata: {
        providerName: 'util',
        providerVersion: '0.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowBypass = config.allowBypass;
    this._allowDestroy = config.allowDestroy;
    this._errorMessage = config.errorMessage;
    this._protectedValue = config.protectedValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_bypass - computed: true, optional: true, required: false
  private _allowBypass?: boolean | cdktf.IResolvable; 
  public get allowBypass() {
    return this.getBooleanAttribute('allow_bypass');
  }
  public set allowBypass(value: boolean | cdktf.IResolvable) {
    this._allowBypass = value;
  }
  public resetAllowBypass() {
    this._allowBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowBypassInput() {
    return this._allowBypass;
  }

  // allow_destroy - computed: false, optional: true, required: false
  private _allowDestroy?: boolean | cdktf.IResolvable; 
  public get allowDestroy() {
    return this.getBooleanAttribute('allow_destroy');
  }
  public set allowDestroy(value: boolean | cdktf.IResolvable) {
    this._allowDestroy = value;
  }
  public resetAllowDestroy() {
    this._allowDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDestroyInput() {
    return this._allowDestroy;
  }

  // error_message - computed: false, optional: true, required: false
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  public resetErrorMessage() {
    this._errorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
  }

  // protected_value - computed: false, optional: true, required: false
  private _protectedValue?: { [key: string]: any }; 
  public get protectedValue() {
    return this.getAnyMapAttribute('protected_value');
  }
  public set protectedValue(value: { [key: string]: any }) {
    this._protectedValue = value;
  }
  public resetProtectedValue() {
    this._protectedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedValueInput() {
    return this._protectedValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_bypass: cdktf.booleanToTerraform(this._allowBypass),
      allow_destroy: cdktf.booleanToTerraform(this._allowDestroy),
      error_message: cdktf.stringToTerraform(this._errorMessage),
      protected_value: cdktf.hashMapper(cdktf.anyToTerraform)(this._protectedValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_bypass: {
        value: cdktf.booleanToHclTerraform(this._allowBypass),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_destroy: {
        value: cdktf.booleanToHclTerraform(this._allowDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_message: {
        value: cdktf.stringToHclTerraform(this._errorMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_value: {
        value: cdktf.hashMapperHcl(cdktf.anyToHclTerraform)(this._protectedValue),
        isBlock: false,
        type: "map",
        storageClassType: "anyMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
