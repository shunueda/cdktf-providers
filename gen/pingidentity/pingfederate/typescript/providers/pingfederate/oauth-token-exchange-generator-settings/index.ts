// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_token_exchange_generator_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthTokenExchangeGeneratorSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reference to the default Token Exchange Generator group, if one is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_token_exchange_generator_settings#default_generator_group_ref OauthTokenExchangeGeneratorSettings#default_generator_group_ref}
  */
  readonly defaultGeneratorGroupRef?: OauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRef;
}
export interface OauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_token_exchange_generator_settings#id OauthTokenExchangeGeneratorSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRefToTerraform(struct?: OauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRefToHclTerraform(struct?: OauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_token_exchange_generator_settings pingfederate_oauth_token_exchange_generator_settings}
*/
export class OauthTokenExchangeGeneratorSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_token_exchange_generator_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthTokenExchangeGeneratorSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthTokenExchangeGeneratorSettings to import
  * @param importFromId The id of the existing OauthTokenExchangeGeneratorSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_token_exchange_generator_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthTokenExchangeGeneratorSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_token_exchange_generator_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_token_exchange_generator_settings pingfederate_oauth_token_exchange_generator_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthTokenExchangeGeneratorSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OauthTokenExchangeGeneratorSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_token_exchange_generator_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultGeneratorGroupRef.internalValue = config.defaultGeneratorGroupRef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_generator_group_ref - computed: false, optional: true, required: false
  private _defaultGeneratorGroupRef = new OauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRefOutputReference(this, "default_generator_group_ref");
  public get defaultGeneratorGroupRef() {
    return this._defaultGeneratorGroupRef;
  }
  public putDefaultGeneratorGroupRef(value: OauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRef) {
    this._defaultGeneratorGroupRef.internalValue = value;
  }
  public resetDefaultGeneratorGroupRef() {
    this._defaultGeneratorGroupRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGeneratorGroupRefInput() {
    return this._defaultGeneratorGroupRef.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_generator_group_ref: oauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRefToTerraform(this._defaultGeneratorGroupRef.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_generator_group_ref: {
        value: oauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRefToHclTerraform(this._defaultGeneratorGroupRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthTokenExchangeGeneratorSettingsDefaultGeneratorGroupRef",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
