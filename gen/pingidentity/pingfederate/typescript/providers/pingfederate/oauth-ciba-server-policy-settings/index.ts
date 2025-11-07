// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_ciba_server_policy_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthCibaServerPolicySettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reference to the default request policy, if one is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_ciba_server_policy_settings#default_request_policy_ref OauthCibaServerPolicySettings#default_request_policy_ref}
  */
  readonly defaultRequestPolicyRef?: OauthCibaServerPolicySettingsDefaultRequestPolicyRef;
}
export interface OauthCibaServerPolicySettingsDefaultRequestPolicyRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_ciba_server_policy_settings#id OauthCibaServerPolicySettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthCibaServerPolicySettingsDefaultRequestPolicyRefToTerraform(struct?: OauthCibaServerPolicySettingsDefaultRequestPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthCibaServerPolicySettingsDefaultRequestPolicyRefToHclTerraform(struct?: OauthCibaServerPolicySettingsDefaultRequestPolicyRef | cdktf.IResolvable): any {
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

export class OauthCibaServerPolicySettingsDefaultRequestPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthCibaServerPolicySettingsDefaultRequestPolicyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthCibaServerPolicySettingsDefaultRequestPolicyRef | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_ciba_server_policy_settings pingfederate_oauth_ciba_server_policy_settings}
*/
export class OauthCibaServerPolicySettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_ciba_server_policy_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthCibaServerPolicySettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthCibaServerPolicySettings to import
  * @param importFromId The id of the existing OauthCibaServerPolicySettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_ciba_server_policy_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthCibaServerPolicySettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_ciba_server_policy_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_ciba_server_policy_settings pingfederate_oauth_ciba_server_policy_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthCibaServerPolicySettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OauthCibaServerPolicySettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_ciba_server_policy_settings',
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
    this._defaultRequestPolicyRef.internalValue = config.defaultRequestPolicyRef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_request_policy_ref - computed: false, optional: true, required: false
  private _defaultRequestPolicyRef = new OauthCibaServerPolicySettingsDefaultRequestPolicyRefOutputReference(this, "default_request_policy_ref");
  public get defaultRequestPolicyRef() {
    return this._defaultRequestPolicyRef;
  }
  public putDefaultRequestPolicyRef(value: OauthCibaServerPolicySettingsDefaultRequestPolicyRef) {
    this._defaultRequestPolicyRef.internalValue = value;
  }
  public resetDefaultRequestPolicyRef() {
    this._defaultRequestPolicyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRequestPolicyRefInput() {
    return this._defaultRequestPolicyRef.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_request_policy_ref: oauthCibaServerPolicySettingsDefaultRequestPolicyRefToTerraform(this._defaultRequestPolicyRef.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_request_policy_ref: {
        value: oauthCibaServerPolicySettingsDefaultRequestPolicyRefToHclTerraform(this._defaultRequestPolicyRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthCibaServerPolicySettingsDefaultRequestPolicyRef",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
