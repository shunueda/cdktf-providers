// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectEmailfilterIptrustEntriesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries#addr_type ObjectEmailfilterIptrustEntriesA#addr_type}
  */
  readonly addrType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries#adom ObjectEmailfilterIptrustEntriesA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries#fosid ObjectEmailfilterIptrustEntriesA#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries#id ObjectEmailfilterIptrustEntriesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries#ip4_subnet ObjectEmailfilterIptrustEntriesA#ip4_subnet}
  */
  readonly ip4Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries#ip6_subnet ObjectEmailfilterIptrustEntriesA#ip6_subnet}
  */
  readonly ip6Subnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries#iptrust ObjectEmailfilterIptrustEntriesA#iptrust}
  */
  readonly iptrust: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries#scopetype ObjectEmailfilterIptrustEntriesA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries#status ObjectEmailfilterIptrustEntriesA#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries fortimanager_object_emailfilter_iptrust_entries}
*/
export class ObjectEmailfilterIptrustEntriesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_emailfilter_iptrust_entries";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectEmailfilterIptrustEntriesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectEmailfilterIptrustEntriesA to import
  * @param importFromId The id of the existing ObjectEmailfilterIptrustEntriesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectEmailfilterIptrustEntriesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_emailfilter_iptrust_entries", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_emailfilter_iptrust_entries fortimanager_object_emailfilter_iptrust_entries} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectEmailfilterIptrustEntriesAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectEmailfilterIptrustEntriesAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_emailfilter_iptrust_entries',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrType = config.addrType;
    this._adom = config.adom;
    this._fosid = config.fosid;
    this._id = config.id;
    this._ip4Subnet = config.ip4Subnet;
    this._ip6Subnet = config.ip6Subnet;
    this._iptrust = config.iptrust;
    this._scopetype = config.scopetype;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_type - computed: false, optional: true, required: false
  private _addrType?: string; 
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }
  public set addrType(value: string) {
    this._addrType = value;
  }
  public resetAddrType() {
    this._addrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrTypeInput() {
    return this._addrType;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // ip4_subnet - computed: true, optional: true, required: false
  private _ip4Subnet?: string; 
  public get ip4Subnet() {
    return this.getStringAttribute('ip4_subnet');
  }
  public set ip4Subnet(value: string) {
    this._ip4Subnet = value;
  }
  public resetIp4Subnet() {
    this._ip4Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip4SubnetInput() {
    return this._ip4Subnet;
  }

  // ip6_subnet - computed: false, optional: true, required: false
  private _ip6Subnet?: string; 
  public get ip6Subnet() {
    return this.getStringAttribute('ip6_subnet');
  }
  public set ip6Subnet(value: string) {
    this._ip6Subnet = value;
  }
  public resetIp6Subnet() {
    this._ip6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ip6SubnetInput() {
    return this._ip6Subnet;
  }

  // iptrust - computed: false, optional: false, required: true
  private _iptrust?: string; 
  public get iptrust() {
    return this.getStringAttribute('iptrust');
  }
  public set iptrust(value: string) {
    this._iptrust = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iptrustInput() {
    return this._iptrust;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_type: cdktf.stringToTerraform(this._addrType),
      adom: cdktf.stringToTerraform(this._adom),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      ip4_subnet: cdktf.stringToTerraform(this._ip4Subnet),
      ip6_subnet: cdktf.stringToTerraform(this._ip6Subnet),
      iptrust: cdktf.stringToTerraform(this._iptrust),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_type: {
        value: cdktf.stringToHclTerraform(this._addrType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip4_subnet: {
        value: cdktf.stringToHclTerraform(this._ip4Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip6_subnet: {
        value: cdktf.stringToHclTerraform(this._ip6Subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iptrust: {
        value: cdktf.stringToHclTerraform(this._iptrust),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
