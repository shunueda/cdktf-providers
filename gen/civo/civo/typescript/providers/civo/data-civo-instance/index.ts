// https://registry.terraform.io/providers/civo/civo/1.1.7/docs/data-sources/instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCivoInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The hostname of the Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/data-sources/instance#hostname DataCivoInstance#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/data-sources/instance#id DataCivoInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region of an existing Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/data-sources/instance#region DataCivoInstance#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/data-sources/instance civo_instance}
*/
export class DataCivoInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "civo_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCivoInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCivoInstance to import
  * @param importFromId The id of the existing DataCivoInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/data-sources/instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCivoInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "civo_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/civo/civo/1.1.7/docs/data-sources/instance civo_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCivoInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCivoInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'civo_instance',
      terraformGeneratorMetadata: {
        providerName: 'civo',
        providerVersion: '1.1.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostname = config.hostname;
    this._id = config.id;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu_cores - computed: true, optional: false, required: false
  public get cpuCores() {
    return this.getNumberAttribute('cpu_cores');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // disk_gb - computed: true, optional: false, required: false
  public get diskGb() {
    return this.getNumberAttribute('disk_gb');
  }

  // firewall_id - computed: true, optional: false, required: false
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: false, optional: true, required: false
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

  // initial_password - computed: true, optional: false, required: false
  public get initialPassword() {
    return this.getStringAttribute('initial_password');
  }

  // initial_user - computed: true, optional: false, required: false
  public get initialUser() {
    return this.getStringAttribute('initial_user');
  }

  // network_id - computed: true, optional: false, required: false
  public get networkId() {
    return this.getStringAttribute('network_id');
  }

  // notes - computed: true, optional: false, required: false
  public get notes() {
    return this.getStringAttribute('notes');
  }

  // private_ip - computed: true, optional: false, required: false
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }

  // pseudo_ip - computed: true, optional: false, required: false
  public get pseudoIp() {
    return this.getStringAttribute('pseudo_ip');
  }

  // public_ip - computed: true, optional: false, required: false
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }

  // ram_mb - computed: true, optional: false, required: false
  public get ramMb() {
    return this.getNumberAttribute('ram_mb');
  }

  // region - computed: false, optional: true, required: false
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

  // reverse_dns - computed: true, optional: false, required: false
  public get reverseDns() {
    return this.getStringAttribute('reverse_dns');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // sshkey_id - computed: true, optional: false, required: false
  public get sshkeyId() {
    return this.getStringAttribute('sshkey_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
