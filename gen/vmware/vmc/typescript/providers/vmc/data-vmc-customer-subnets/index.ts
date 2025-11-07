// https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVmcCustomerSubnetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The linked connected account identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets#connected_account_id DataVmcCustomerSubnets#connected_account_id}
  */
  readonly connectedAccountId?: string;
  /**
  * When true, forces the mappings for datacenters to be refreshed for the connected account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets#force_refresh DataVmcCustomerSubnets#force_refresh}
  */
  readonly forceRefresh?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets#id DataVmcCustomerSubnets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The server instance type to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets#instance_type DataVmcCustomerSubnets#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The number of hosts .
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets#num_hosts DataVmcCustomerSubnets#num_hosts}
  */
  readonly numHosts?: number;
  /**
  * The VMC region of the cloud resources to work in. (e.g. US_WEST_2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets#region DataVmcCustomerSubnets#region}
  */
  readonly region: string;
  /**
  * Sddc ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets#sddc_id DataVmcCustomerSubnets#sddc_id}
  */
  readonly sddcId?: string;
  /**
  * Sddc Type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets#sddc_type DataVmcCustomerSubnets#sddc_type}
  */
  readonly sddcType?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets vmc_customer_subnets}
*/
export class DataVmcCustomerSubnets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vmc_customer_subnets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVmcCustomerSubnets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVmcCustomerSubnets to import
  * @param importFromId The id of the existing DataVmcCustomerSubnets that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVmcCustomerSubnets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vmc_customer_subnets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vmc/1.15.5/docs/data-sources/customer_subnets vmc_customer_subnets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVmcCustomerSubnetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataVmcCustomerSubnetsConfig) {
    super(scope, id, {
      terraformResourceType: 'vmc_customer_subnets',
      terraformGeneratorMetadata: {
        providerName: 'vmc',
        providerVersion: '1.15.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectedAccountId = config.connectedAccountId;
    this._forceRefresh = config.forceRefresh;
    this._id = config.id;
    this._instanceType = config.instanceType;
    this._numHosts = config.numHosts;
    this._region = config.region;
    this._sddcId = config.sddcId;
    this._sddcType = config.sddcType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connected_account_id - computed: false, optional: true, required: false
  private _connectedAccountId?: string; 
  public get connectedAccountId() {
    return this.getStringAttribute('connected_account_id');
  }
  public set connectedAccountId(value: string) {
    this._connectedAccountId = value;
  }
  public resetConnectedAccountId() {
    this._connectedAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedAccountIdInput() {
    return this._connectedAccountId;
  }

  // customer_available_zones - computed: true, optional: false, required: false
  public get customerAvailableZones() {
    return this.getListAttribute('customer_available_zones');
  }

  // force_refresh - computed: false, optional: true, required: false
  private _forceRefresh?: boolean | cdktf.IResolvable; 
  public get forceRefresh() {
    return this.getBooleanAttribute('force_refresh');
  }
  public set forceRefresh(value: boolean | cdktf.IResolvable) {
    this._forceRefresh = value;
  }
  public resetForceRefresh() {
    this._forceRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRefreshInput() {
    return this._forceRefresh;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // num_hosts - computed: false, optional: true, required: false
  private _numHosts?: number; 
  public get numHosts() {
    return this.getNumberAttribute('num_hosts');
  }
  public set numHosts(value: number) {
    this._numHosts = value;
  }
  public resetNumHosts() {
    this._numHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numHostsInput() {
    return this._numHosts;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sddc_id - computed: false, optional: true, required: false
  private _sddcId?: string; 
  public get sddcId() {
    return this.getStringAttribute('sddc_id');
  }
  public set sddcId(value: string) {
    this._sddcId = value;
  }
  public resetSddcId() {
    this._sddcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcIdInput() {
    return this._sddcId;
  }

  // sddc_type - computed: false, optional: true, required: false
  private _sddcType?: string; 
  public get sddcType() {
    return this.getStringAttribute('sddc_type');
  }
  public set sddcType(value: string) {
    this._sddcType = value;
  }
  public resetSddcType() {
    this._sddcType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddcTypeInput() {
    return this._sddcType;
  }

  // vpc_map - computed: true, optional: false, required: false
  private _vpcMap = new cdktf.StringMap(this, "vpc_map");
  public get vpcMap() {
    return this._vpcMap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connected_account_id: cdktf.stringToTerraform(this._connectedAccountId),
      force_refresh: cdktf.booleanToTerraform(this._forceRefresh),
      id: cdktf.stringToTerraform(this._id),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      num_hosts: cdktf.numberToTerraform(this._numHosts),
      region: cdktf.stringToTerraform(this._region),
      sddc_id: cdktf.stringToTerraform(this._sddcId),
      sddc_type: cdktf.stringToTerraform(this._sddcType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connected_account_id: {
        value: cdktf.stringToHclTerraform(this._connectedAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_refresh: {
        value: cdktf.booleanToHclTerraform(this._forceRefresh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_hosts: {
        value: cdktf.numberToHclTerraform(this._numHosts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_id: {
        value: cdktf.stringToHclTerraform(this._sddcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sddc_type: {
        value: cdktf.stringToHclTerraform(this._sddcType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
