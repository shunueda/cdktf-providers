// https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/data-sources/host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPritunlHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/data-sources/host#hostname DataPritunlHost#hostname}
  */
  readonly hostname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/data-sources/host pritunl_host}
*/
export class DataPritunlHost extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pritunl_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPritunlHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPritunlHost to import
  * @param importFromId The id of the existing DataPritunlHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/data-sources/host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPritunlHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pritunl_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/disc/pritunl/0.6.2/docs/data-sources/host pritunl_host} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPritunlHostConfig
  */
  public constructor(scope: Construct, id: string, config: DataPritunlHostConfig) {
    super(scope, id, {
      terraformResourceType: 'pritunl_host',
      terraformGeneratorMetadata: {
        providerName: 'pritunl',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_group - computed: true, optional: false, required: false
  public get availabilityGroup() {
    return this.getStringAttribute('availability_group');
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_addr - computed: true, optional: false, required: false
  public get linkAddr() {
    return this.getStringAttribute('link_addr');
  }

  // local_addr - computed: true, optional: false, required: false
  public get localAddr() {
    return this.getStringAttribute('local_addr');
  }

  // local_addr6 - computed: true, optional: false, required: false
  public get localAddr6() {
    return this.getStringAttribute('local_addr6');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // public_addr - computed: true, optional: false, required: false
  public get publicAddr() {
    return this.getStringAttribute('public_addr');
  }

  // public_addr6 - computed: true, optional: false, required: false
  public get publicAddr6() {
    return this.getStringAttribute('public_addr6');
  }

  // routed_subnet6 - computed: true, optional: false, required: false
  public get routedSubnet6() {
    return this.getStringAttribute('routed_subnet6');
  }

  // routed_subnet6_wg - computed: true, optional: false, required: false
  public get routedSubnet6Wg() {
    return this.getStringAttribute('routed_subnet6_wg');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // sync_address - computed: true, optional: false, required: false
  public get syncAddress() {
    return this.getStringAttribute('sync_address');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hostname: cdktf.stringToTerraform(this._hostname),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
