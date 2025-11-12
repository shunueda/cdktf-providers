// https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataEclNetworkFicGatewayV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2#description DataEclNetworkFicGatewayV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2#fic_gateway_id DataEclNetworkFicGatewayV2#fic_gateway_id}
  */
  readonly ficGatewayId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2#fic_service_id DataEclNetworkFicGatewayV2#fic_service_id}
  */
  readonly ficServiceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2#id DataEclNetworkFicGatewayV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2#name DataEclNetworkFicGatewayV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2#qos_option_id DataEclNetworkFicGatewayV2#qos_option_id}
  */
  readonly qosOptionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2#status DataEclNetworkFicGatewayV2#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2#tenant_id DataEclNetworkFicGatewayV2#tenant_id}
  */
  readonly tenantId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2 ecl_network_fic_gateway_v2}
*/
export class DataEclNetworkFicGatewayV2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ecl_network_fic_gateway_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataEclNetworkFicGatewayV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataEclNetworkFicGatewayV2 to import
  * @param importFromId The id of the existing DataEclNetworkFicGatewayV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataEclNetworkFicGatewayV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ecl_network_fic_gateway_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/ecl/2.12.1/docs/data-sources/network_fic_gateway_v2 ecl_network_fic_gateway_v2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataEclNetworkFicGatewayV2Config = {}
  */
  public constructor(scope: Construct, id: string, config: DataEclNetworkFicGatewayV2Config = {}) {
    super(scope, id, {
      terraformResourceType: 'ecl_network_fic_gateway_v2',
      terraformGeneratorMetadata: {
        providerName: 'ecl',
        providerVersion: '2.12.1',
        providerVersionConstraint: '2.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._ficGatewayId = config.ficGatewayId;
    this._ficServiceId = config.ficServiceId;
    this._id = config.id;
    this._name = config.name;
    this._qosOptionId = config.qosOptionId;
    this._status = config.status;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // fic_gateway_id - computed: true, optional: true, required: false
  private _ficGatewayId?: string; 
  public get ficGatewayId() {
    return this.getStringAttribute('fic_gateway_id');
  }
  public set ficGatewayId(value: string) {
    this._ficGatewayId = value;
  }
  public resetFicGatewayId() {
    this._ficGatewayId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ficGatewayIdInput() {
    return this._ficGatewayId;
  }

  // fic_service_id - computed: true, optional: true, required: false
  private _ficServiceId?: string; 
  public get ficServiceId() {
    return this.getStringAttribute('fic_service_id');
  }
  public set ficServiceId(value: string) {
    this._ficServiceId = value;
  }
  public resetFicServiceId() {
    this._ficServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ficServiceIdInput() {
    return this._ficServiceId;
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

  // name - computed: true, optional: true, required: false
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

  // qos_option_id - computed: true, optional: true, required: false
  private _qosOptionId?: string; 
  public get qosOptionId() {
    return this.getStringAttribute('qos_option_id');
  }
  public set qosOptionId(value: string) {
    this._qosOptionId = value;
  }
  public resetQosOptionId() {
    this._qosOptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosOptionIdInput() {
    return this._qosOptionId;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      fic_gateway_id: cdktf.stringToTerraform(this._ficGatewayId),
      fic_service_id: cdktf.stringToTerraform(this._ficServiceId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      qos_option_id: cdktf.stringToTerraform(this._qosOptionId),
      status: cdktf.stringToTerraform(this._status),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fic_gateway_id: {
        value: cdktf.stringToHclTerraform(this._ficGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fic_service_id: {
        value: cdktf.stringToHclTerraform(this._ficServiceId),
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
      qos_option_id: {
        value: cdktf.stringToHclTerraform(this._qosOptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
