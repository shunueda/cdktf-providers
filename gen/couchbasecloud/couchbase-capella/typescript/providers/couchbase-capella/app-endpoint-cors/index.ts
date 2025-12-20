// https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppEndpointCorsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#app_endpoint_name AppEndpointCorsA#app_endpoint_name}
  */
  readonly appEndpointName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#app_service_id AppEndpointCorsA#app_service_id}
  */
  readonly appServiceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#cluster_id AppEndpointCorsA#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#disabled AppEndpointCorsA#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#headers AppEndpointCorsA#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#login_origin AppEndpointCorsA#login_origin}
  */
  readonly loginOrigin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#max_age AppEndpointCorsA#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#organization_id AppEndpointCorsA#organization_id}
  */
  readonly organizationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#origin AppEndpointCorsA#origin}
  */
  readonly origin: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#project_id AppEndpointCorsA#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors couchbase-capella_app_endpoint_cors}
*/
export class AppEndpointCorsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "couchbase-capella_app_endpoint_cors";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppEndpointCorsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppEndpointCorsA to import
  * @param importFromId The id of the existing AppEndpointCorsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppEndpointCorsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "couchbase-capella_app_endpoint_cors", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/couchbasecloud/couchbase-capella/1.7.0/docs/resources/app_endpoint_cors couchbase-capella_app_endpoint_cors} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppEndpointCorsAConfig
  */
  public constructor(scope: Construct, id: string, config: AppEndpointCorsAConfig) {
    super(scope, id, {
      terraformResourceType: 'couchbase-capella_app_endpoint_cors',
      terraformGeneratorMetadata: {
        providerName: 'couchbase-capella',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appEndpointName = config.appEndpointName;
    this._appServiceId = config.appServiceId;
    this._clusterId = config.clusterId;
    this._disabled = config.disabled;
    this._headers = config.headers;
    this._loginOrigin = config.loginOrigin;
    this._maxAge = config.maxAge;
    this._organizationId = config.organizationId;
    this._origin = config.origin;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_endpoint_name - computed: false, optional: false, required: true
  private _appEndpointName?: string; 
  public get appEndpointName() {
    return this.getStringAttribute('app_endpoint_name');
  }
  public set appEndpointName(value: string) {
    this._appEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appEndpointNameInput() {
    return this._appEndpointName;
  }

  // app_service_id - computed: false, optional: false, required: true
  private _appServiceId?: string; 
  public get appServiceId() {
    return this.getStringAttribute('app_service_id');
  }
  public set appServiceId(value: string) {
    this._appServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appServiceIdInput() {
    return this._appServiceId;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // login_origin - computed: false, optional: true, required: false
  private _loginOrigin?: string[]; 
  public get loginOrigin() {
    return cdktf.Fn.tolist(this.getListAttribute('login_origin'));
  }
  public set loginOrigin(value: string[]) {
    this._loginOrigin = value;
  }
  public resetLoginOrigin() {
    this._loginOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginOriginInput() {
    return this._loginOrigin;
  }

  // max_age - computed: true, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
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

  // origin - computed: false, optional: false, required: true
  private _origin?: string[]; 
  public get origin() {
    return cdktf.Fn.tolist(this.getListAttribute('origin'));
  }
  public set origin(value: string[]) {
    this._origin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_endpoint_name: cdktf.stringToTerraform(this._appEndpointName),
      app_service_id: cdktf.stringToTerraform(this._appServiceId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      disabled: cdktf.booleanToTerraform(this._disabled),
      headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._headers),
      login_origin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._loginOrigin),
      max_age: cdktf.numberToTerraform(this._maxAge),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      origin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._origin),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._appEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_service_id: {
        value: cdktf.stringToHclTerraform(this._appServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._headers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      login_origin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._loginOrigin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_age: {
        value: cdktf.numberToHclTerraform(this._maxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._origin),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
