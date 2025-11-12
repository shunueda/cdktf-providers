// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_manager_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthAccessTokenManagerSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Reference to the default access token manager, if one is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_manager_settings#default_access_token_manager_ref OauthAccessTokenManagerSettings#default_access_token_manager_ref}
  */
  readonly defaultAccessTokenManagerRef?: OauthAccessTokenManagerSettingsDefaultAccessTokenManagerRef;
}
export interface OauthAccessTokenManagerSettingsDefaultAccessTokenManagerRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_manager_settings#id OauthAccessTokenManagerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthAccessTokenManagerSettingsDefaultAccessTokenManagerRefToTerraform(struct?: OauthAccessTokenManagerSettingsDefaultAccessTokenManagerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthAccessTokenManagerSettingsDefaultAccessTokenManagerRefToHclTerraform(struct?: OauthAccessTokenManagerSettingsDefaultAccessTokenManagerRef | cdktf.IResolvable): any {
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

export class OauthAccessTokenManagerSettingsDefaultAccessTokenManagerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthAccessTokenManagerSettingsDefaultAccessTokenManagerRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthAccessTokenManagerSettingsDefaultAccessTokenManagerRef | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_manager_settings pingfederate_oauth_access_token_manager_settings}
*/
export class OauthAccessTokenManagerSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_access_token_manager_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthAccessTokenManagerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthAccessTokenManagerSettings to import
  * @param importFromId The id of the existing OauthAccessTokenManagerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_manager_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthAccessTokenManagerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_access_token_manager_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_access_token_manager_settings pingfederate_oauth_access_token_manager_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthAccessTokenManagerSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OauthAccessTokenManagerSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_access_token_manager_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultAccessTokenManagerRef.internalValue = config.defaultAccessTokenManagerRef;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_access_token_manager_ref - computed: false, optional: true, required: false
  private _defaultAccessTokenManagerRef = new OauthAccessTokenManagerSettingsDefaultAccessTokenManagerRefOutputReference(this, "default_access_token_manager_ref");
  public get defaultAccessTokenManagerRef() {
    return this._defaultAccessTokenManagerRef;
  }
  public putDefaultAccessTokenManagerRef(value: OauthAccessTokenManagerSettingsDefaultAccessTokenManagerRef) {
    this._defaultAccessTokenManagerRef.internalValue = value;
  }
  public resetDefaultAccessTokenManagerRef() {
    this._defaultAccessTokenManagerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccessTokenManagerRefInput() {
    return this._defaultAccessTokenManagerRef.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_access_token_manager_ref: oauthAccessTokenManagerSettingsDefaultAccessTokenManagerRefToTerraform(this._defaultAccessTokenManagerRef.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_access_token_manager_ref: {
        value: oauthAccessTokenManagerSettingsDefaultAccessTokenManagerRefToHclTerraform(this._defaultAccessTokenManagerRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthAccessTokenManagerSettingsDefaultAccessTokenManagerRef",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
