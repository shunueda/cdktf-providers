// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigApplicationAuthorizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of API IDs to be authorized for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization#api_ids ApigApplicationAuthorization#api_ids}
  */
  readonly apiIds: string[];
  /**
  * The script configuration value of this change is also the original value used for comparison with
  * the new value next time the change is made. The corresponding parameter name is 'api_ids'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization#api_ids_origin ApigApplicationAuthorization#api_ids_origin}
  */
  readonly apiIdsOrigin?: string[];
  /**
  * The ID of the application authorized to access the APIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization#application_id ApigApplicationAuthorization#application_id}
  */
  readonly applicationId: string;
  /**
  * The environment ID where the APIs were published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization#env_id ApigApplicationAuthorization#env_id}
  */
  readonly envId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization#id ApigApplicationAuthorization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the dedicated instance to which the application and APIs belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization#instance_id ApigApplicationAuthorization#instance_id}
  */
  readonly instanceId: string;
  /**
  * The region where the application and APPCODEs are located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization#region ApigApplicationAuthorization#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization sbercloud_apig_application_authorization}
*/
export class ApigApplicationAuthorization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_apig_application_authorization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigApplicationAuthorization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigApplicationAuthorization to import
  * @param importFromId The id of the existing ApigApplicationAuthorization that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigApplicationAuthorization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_apig_application_authorization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.14/docs/resources/apig_application_authorization sbercloud_apig_application_authorization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigApplicationAuthorizationConfig
  */
  public constructor(scope: Construct, id: string, config: ApigApplicationAuthorizationConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_apig_application_authorization',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.14',
        providerVersionConstraint: '1.12.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiIds = config.apiIds;
    this._apiIdsOrigin = config.apiIdsOrigin;
    this._applicationId = config.applicationId;
    this._envId = config.envId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_ids - computed: false, optional: false, required: true
  private _apiIds?: string[]; 
  public get apiIds() {
    return cdktf.Fn.tolist(this.getListAttribute('api_ids'));
  }
  public set apiIds(value: string[]) {
    this._apiIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdsInput() {
    return this._apiIds;
  }

  // api_ids_origin - computed: true, optional: true, required: false
  private _apiIdsOrigin?: string[]; 
  public get apiIdsOrigin() {
    return this.getListAttribute('api_ids_origin');
  }
  public set apiIdsOrigin(value: string[]) {
    this._apiIdsOrigin = value;
  }
  public resetApiIdsOrigin() {
    this._apiIdsOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdsOriginInput() {
    return this._apiIdsOrigin;
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

  // env_id - computed: false, optional: false, required: true
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiIds),
      api_ids_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiIdsOrigin),
      application_id: cdktf.stringToTerraform(this._applicationId),
      env_id: cdktf.stringToTerraform(this._envId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      api_ids_origin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiIdsOrigin),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_id: {
        value: cdktf.stringToHclTerraform(this._envId),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
