// generated from terraform resource schema

import { AuthenticationPoliciesAuthnSelectionTrees, 
authenticationPoliciesAuthnSelectionTreesToTerraform, 
authenticationPoliciesAuthnSelectionTreesToHclTerraform, 
AuthenticationPoliciesAuthnSelectionTreesList, 
AuthenticationPoliciesDefaultAuthenticationSources, 
authenticationPoliciesDefaultAuthenticationSourcesToTerraform, 
authenticationPoliciesDefaultAuthenticationSourcesToHclTerraform, 
AuthenticationPoliciesDefaultAuthenticationSourcesList} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AuthenticationPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of authentication policy trees.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies#authn_selection_trees AuthenticationPolicies#authn_selection_trees}
  */
  readonly authnSelectionTrees: AuthenticationPoliciesAuthnSelectionTrees[] | cdktf.IResolvable;
  /**
  * The default authentication sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies#default_authentication_sources AuthenticationPolicies#default_authentication_sources}
  */
  readonly defaultAuthenticationSources?: AuthenticationPoliciesDefaultAuthenticationSources[] | cdktf.IResolvable;
  /**
  * Fail if policy finds no authentication source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies#fail_if_no_selection AuthenticationPolicies#fail_if_no_selection}
  */
  readonly failIfNoSelection?: boolean | cdktf.IResolvable;
  /**
  * The HTTP request parameters to track and make available to authentication sources, selectors, and contract mappings throughout the authentication policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies#tracked_http_parameters AuthenticationPolicies#tracked_http_parameters}
  */
  readonly trackedHttpParameters?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies pingfederate_authentication_policies}
*/
export class AuthenticationPolicies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_authentication_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationPolicies to import
  * @param importFromId The id of the existing AuthenticationPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_authentication_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/authentication_policies pingfederate_authentication_policies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_authentication_policies',
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
    this._authnSelectionTrees.internalValue = config.authnSelectionTrees;
    this._defaultAuthenticationSources.internalValue = config.defaultAuthenticationSources;
    this._failIfNoSelection = config.failIfNoSelection;
    this._trackedHttpParameters = config.trackedHttpParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authn_selection_trees - computed: false, optional: false, required: true
  private _authnSelectionTrees = new AuthenticationPoliciesAuthnSelectionTreesList(this, "authn_selection_trees", false);
  public get authnSelectionTrees() {
    return this._authnSelectionTrees;
  }
  public putAuthnSelectionTrees(value: AuthenticationPoliciesAuthnSelectionTrees[] | cdktf.IResolvable) {
    this._authnSelectionTrees.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authnSelectionTreesInput() {
    return this._authnSelectionTrees.internalValue;
  }

  // default_authentication_sources - computed: true, optional: true, required: false
  private _defaultAuthenticationSources = new AuthenticationPoliciesDefaultAuthenticationSourcesList(this, "default_authentication_sources", false);
  public get defaultAuthenticationSources() {
    return this._defaultAuthenticationSources;
  }
  public putDefaultAuthenticationSources(value: AuthenticationPoliciesDefaultAuthenticationSources[] | cdktf.IResolvable) {
    this._defaultAuthenticationSources.internalValue = value;
  }
  public resetDefaultAuthenticationSources() {
    this._defaultAuthenticationSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthenticationSourcesInput() {
    return this._defaultAuthenticationSources.internalValue;
  }

  // fail_if_no_selection - computed: true, optional: true, required: false
  private _failIfNoSelection?: boolean | cdktf.IResolvable; 
  public get failIfNoSelection() {
    return this.getBooleanAttribute('fail_if_no_selection');
  }
  public set failIfNoSelection(value: boolean | cdktf.IResolvable) {
    this._failIfNoSelection = value;
  }
  public resetFailIfNoSelection() {
    this._failIfNoSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIfNoSelectionInput() {
    return this._failIfNoSelection;
  }

  // tracked_http_parameters - computed: true, optional: true, required: false
  private _trackedHttpParameters?: string[]; 
  public get trackedHttpParameters() {
    return cdktf.Fn.tolist(this.getListAttribute('tracked_http_parameters'));
  }
  public set trackedHttpParameters(value: string[]) {
    this._trackedHttpParameters = value;
  }
  public resetTrackedHttpParameters() {
    this._trackedHttpParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackedHttpParametersInput() {
    return this._trackedHttpParameters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authn_selection_trees: cdktf.listMapper(authenticationPoliciesAuthnSelectionTreesToTerraform, false)(this._authnSelectionTrees.internalValue),
      default_authentication_sources: cdktf.listMapper(authenticationPoliciesDefaultAuthenticationSourcesToTerraform, false)(this._defaultAuthenticationSources.internalValue),
      fail_if_no_selection: cdktf.booleanToTerraform(this._failIfNoSelection),
      tracked_http_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._trackedHttpParameters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authn_selection_trees: {
        value: cdktf.listMapperHcl(authenticationPoliciesAuthnSelectionTreesToHclTerraform, false)(this._authnSelectionTrees.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationPoliciesAuthnSelectionTreesList",
      },
      default_authentication_sources: {
        value: cdktf.listMapperHcl(authenticationPoliciesDefaultAuthenticationSourcesToHclTerraform, false)(this._defaultAuthenticationSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AuthenticationPoliciesDefaultAuthenticationSourcesList",
      },
      fail_if_no_selection: {
        value: cdktf.booleanToHclTerraform(this._failIfNoSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tracked_http_parameters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._trackedHttpParameters),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
