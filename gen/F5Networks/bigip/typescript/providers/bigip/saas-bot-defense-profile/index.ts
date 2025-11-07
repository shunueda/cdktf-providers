// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SaasBotDefenseProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the API key, enter the value provided by F5 Support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#api_key SaasBotDefenseProfile#api_key}
  */
  readonly apiKey: string;
  /**
  * Specifies the Bot Defense API application ID, enter the value provided by F5 Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#application_id SaasBotDefenseProfile#application_id}
  */
  readonly applicationId: string;
  /**
  * Distributed Cloud Services Bot Defense parent profile from which this profile will inherit settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#defaults_from SaasBotDefenseProfile#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * Specifies descriptive text that identifies the BD profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#description SaasBotDefenseProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#id SaasBotDefenseProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name for the Distributed Cloud Services Bot Defense profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#name SaasBotDefenseProfile#name}
  */
  readonly name: string;
  /**
  * Specifies the web hostname to which API requests are made
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#shape_protection_pool SaasBotDefenseProfile#shape_protection_pool}
  */
  readonly shapeProtectionPool: string;
  /**
  * Specifies a server-side SSL profile that is different from what the application pool uses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#ssl_profile SaasBotDefenseProfile#ssl_profile}
  */
  readonly sslProfile: string;
  /**
  * Specifies the tenant ID, enter the value provided by F5 Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#tenant_id SaasBotDefenseProfile#tenant_id}
  */
  readonly tenantId: string;
  /**
  * protected_endpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#protected_endpoints SaasBotDefenseProfile#protected_endpoints}
  */
  readonly protectedEndpoints: SaasBotDefenseProfileProtectedEndpoints[] | cdktf.IResolvable;
}
export interface SaasBotDefenseProfileProtectedEndpoints {
  /**
  * Specifies the path to the web page to be protected by BD. For example, `/login`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#endpoint SaasBotDefenseProfile#endpoint}
  */
  readonly endpoint?: string;
  /**
  * hostname or IP address of the web page to be protected by the Bot Defense
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#host SaasBotDefenseProfile#host}
  */
  readonly host?: string;
  /**
  * Specifies whether the BIG-IP or F5 XC Bot Defense handles mitigation of malicious HTTP requests. This field is enabled only if the Service Level field is set to Advanced/Premium
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#mitigation_action SaasBotDefenseProfile#mitigation_action}
  */
  readonly mitigationAction?: string;
  /**
  * Unique name for the protected endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#name SaasBotDefenseProfile#name}
  */
  readonly name: string;
  /**
  * POST field to protect the path when it has a POST method, `enabled` or `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#post SaasBotDefenseProfile#post}
  */
  readonly post?: string;
  /**
  * PUT field to protect the path when it has a PUT method,`enabled` or `disabled`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#put SaasBotDefenseProfile#put}
  */
  readonly put?: string;
}

export function saasBotDefenseProfileProtectedEndpointsToTerraform(struct?: SaasBotDefenseProfileProtectedEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    host: cdktf.stringToTerraform(struct!.host),
    mitigation_action: cdktf.stringToTerraform(struct!.mitigationAction),
    name: cdktf.stringToTerraform(struct!.name),
    post: cdktf.stringToTerraform(struct!.post),
    put: cdktf.stringToTerraform(struct!.put),
  }
}


export function saasBotDefenseProfileProtectedEndpointsToHclTerraform(struct?: SaasBotDefenseProfileProtectedEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mitigation_action: {
      value: cdktf.stringToHclTerraform(struct!.mitigationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post: {
      value: cdktf.stringToHclTerraform(struct!.post),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    put: {
      value: cdktf.stringToHclTerraform(struct!.put),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SaasBotDefenseProfileProtectedEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SaasBotDefenseProfileProtectedEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._mitigationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigationAction = this._mitigationAction;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._post !== undefined) {
      hasAnyValues = true;
      internalValueResult.post = this._post;
    }
    if (this._put !== undefined) {
      hasAnyValues = true;
      internalValueResult.put = this._put;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SaasBotDefenseProfileProtectedEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoint = undefined;
      this._host = undefined;
      this._mitigationAction = undefined;
      this._name = undefined;
      this._post = undefined;
      this._put = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoint = value.endpoint;
      this._host = value.host;
      this._mitigationAction = value.mitigationAction;
      this._name = value.name;
      this._post = value.post;
      this._put = value.put;
    }
  }

  // endpoint - computed: true, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // host - computed: true, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // mitigation_action - computed: true, optional: true, required: false
  private _mitigationAction?: string; 
  public get mitigationAction() {
    return this.getStringAttribute('mitigation_action');
  }
  public set mitigationAction(value: string) {
    this._mitigationAction = value;
  }
  public resetMitigationAction() {
    this._mitigationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationActionInput() {
    return this._mitigationAction;
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

  // post - computed: true, optional: true, required: false
  private _post?: string; 
  public get post() {
    return this.getStringAttribute('post');
  }
  public set post(value: string) {
    this._post = value;
  }
  public resetPost() {
    this._post = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInput() {
    return this._post;
  }

  // put - computed: true, optional: true, required: false
  private _put?: string; 
  public get put() {
    return this.getStringAttribute('put');
  }
  public set put(value: string) {
    this._put = value;
  }
  public resetPut() {
    this._put = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get putInput() {
    return this._put;
  }
}

export class SaasBotDefenseProfileProtectedEndpointsList extends cdktf.ComplexList {
  public internalValue? : SaasBotDefenseProfileProtectedEndpoints[] | cdktf.IResolvable

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
  public get(index: number): SaasBotDefenseProfileProtectedEndpointsOutputReference {
    return new SaasBotDefenseProfileProtectedEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile bigip_saas_bot_defense_profile}
*/
export class SaasBotDefenseProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_saas_bot_defense_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SaasBotDefenseProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SaasBotDefenseProfile to import
  * @param importFromId The id of the existing SaasBotDefenseProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SaasBotDefenseProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_saas_bot_defense_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/saas_bot_defense_profile bigip_saas_bot_defense_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SaasBotDefenseProfileConfig
  */
  public constructor(scope: Construct, id: string, config: SaasBotDefenseProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_saas_bot_defense_profile',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._applicationId = config.applicationId;
    this._defaultsFrom = config.defaultsFrom;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._shapeProtectionPool = config.shapeProtectionPool;
    this._sslProfile = config.sslProfile;
    this._tenantId = config.tenantId;
    this._protectedEndpoints.internalValue = config.protectedEndpoints;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // defaults_from - computed: false, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
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

  // shape_protection_pool - computed: false, optional: false, required: true
  private _shapeProtectionPool?: string; 
  public get shapeProtectionPool() {
    return this.getStringAttribute('shape_protection_pool');
  }
  public set shapeProtectionPool(value: string) {
    this._shapeProtectionPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeProtectionPoolInput() {
    return this._shapeProtectionPool;
  }

  // ssl_profile - computed: false, optional: false, required: true
  private _sslProfile?: string; 
  public get sslProfile() {
    return this.getStringAttribute('ssl_profile');
  }
  public set sslProfile(value: string) {
    this._sslProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProfileInput() {
    return this._sslProfile;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // protected_endpoints - computed: false, optional: false, required: true
  private _protectedEndpoints = new SaasBotDefenseProfileProtectedEndpointsList(this, "protected_endpoints", false);
  public get protectedEndpoints() {
    return this._protectedEndpoints;
  }
  public putProtectedEndpoints(value: SaasBotDefenseProfileProtectedEndpoints[] | cdktf.IResolvable) {
    this._protectedEndpoints.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedEndpointsInput() {
    return this._protectedEndpoints.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      application_id: cdktf.stringToTerraform(this._applicationId),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      shape_protection_pool: cdktf.stringToTerraform(this._shapeProtectionPool),
      ssl_profile: cdktf.stringToTerraform(this._sslProfile),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      protected_endpoints: cdktf.listMapper(saasBotDefenseProfileProtectedEndpointsToTerraform, true)(this._protectedEndpoints.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
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
      shape_protection_pool: {
        value: cdktf.stringToHclTerraform(this._shapeProtectionPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_profile: {
        value: cdktf.stringToHclTerraform(this._sslProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protected_endpoints: {
        value: cdktf.listMapperHcl(saasBotDefenseProfileProtectedEndpointsToHclTerraform, true)(this._protectedEndpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SaasBotDefenseProfileProtectedEndpointsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
