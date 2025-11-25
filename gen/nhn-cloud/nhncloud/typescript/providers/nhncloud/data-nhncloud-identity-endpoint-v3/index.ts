// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNhncloudIdentityEndpointV3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3#endpoint_region DataNhncloudIdentityEndpointV3#endpoint_region}
  */
  readonly endpointRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3#id DataNhncloudIdentityEndpointV3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3#interface DataNhncloudIdentityEndpointV3#interface}
  */
  readonly interface?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3#name DataNhncloudIdentityEndpointV3#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3#region DataNhncloudIdentityEndpointV3#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3#service_id DataNhncloudIdentityEndpointV3#service_id}
  */
  readonly serviceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3#service_name DataNhncloudIdentityEndpointV3#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3#service_type DataNhncloudIdentityEndpointV3#service_type}
  */
  readonly serviceType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3 nhncloud_identity_endpoint_v3}
*/
export class DataNhncloudIdentityEndpointV3 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_identity_endpoint_v3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNhncloudIdentityEndpointV3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNhncloudIdentityEndpointV3 to import
  * @param importFromId The id of the existing DataNhncloudIdentityEndpointV3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNhncloudIdentityEndpointV3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_identity_endpoint_v3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/data-sources/identity_endpoint_v3 nhncloud_identity_endpoint_v3} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNhncloudIdentityEndpointV3Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataNhncloudIdentityEndpointV3Config = {}) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_identity_endpoint_v3',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpointRegion = config.endpointRegion;
    this._id = config.id;
    this._interface = config.interface;
    this._name = config.name;
    this._region = config.region;
    this._serviceId = config.serviceId;
    this._serviceName = config.serviceName;
    this._serviceType = config.serviceType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_region - computed: false, optional: true, required: false
  private _endpointRegion?: string; 
  public get endpointRegion() {
    return this.getStringAttribute('endpoint_region');
  }
  public set endpointRegion(value: string) {
    this._endpointRegion = value;
  }
  public resetEndpointRegion() {
    this._endpointRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointRegionInput() {
    return this._endpointRegion;
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

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint_region: cdktf.stringToTerraform(this._endpointRegion),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      service_id: cdktf.stringToTerraform(this._serviceId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_type: cdktf.stringToTerraform(this._serviceType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint_region: {
        value: cdktf.stringToHclTerraform(this._endpointRegion),
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
      interface: {
        value: cdktf.stringToHclTerraform(this._interface),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
