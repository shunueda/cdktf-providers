// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global_domain_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Cgnv6GlobalDomainListConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable the DNS AAAA query for each domain in the domain list.; 'disable': Disable the DNS AAAA query for each domain in the domain list.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global_domain_list#aaaa_query Cgnv6GlobalDomainList#aaaa_query}
  */
  readonly aaaaQuery?: string;
  /**
  * Set up the global failure interval in second for the DNS resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global_domain_list#fail_interval Cgnv6GlobalDomainList#fail_interval}
  */
  readonly failInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global_domain_list#id Cgnv6GlobalDomainList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set up the global query interval in minute for the DNS resolution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global_domain_list#interval Cgnv6GlobalDomainList#interval}
  */
  readonly interval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global_domain_list#uuid Cgnv6GlobalDomainList#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global_domain_list thunder_cgnv6_global_domain_list}
*/
export class Cgnv6GlobalDomainList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_global_domain_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cgnv6GlobalDomainList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cgnv6GlobalDomainList to import
  * @param importFromId The id of the existing Cgnv6GlobalDomainList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global_domain_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cgnv6GlobalDomainList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_global_domain_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/cgnv6_global_domain_list thunder_cgnv6_global_domain_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Cgnv6GlobalDomainListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Cgnv6GlobalDomainListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_global_domain_list',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aaaaQuery = config.aaaaQuery;
    this._failInterval = config.failInterval;
    this._id = config.id;
    this._interval = config.interval;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aaaa_query - computed: false, optional: true, required: false
  private _aaaaQuery?: string; 
  public get aaaaQuery() {
    return this.getStringAttribute('aaaa_query');
  }
  public set aaaaQuery(value: string) {
    this._aaaaQuery = value;
  }
  public resetAaaaQuery() {
    this._aaaaQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaQueryInput() {
    return this._aaaaQuery;
  }

  // fail_interval - computed: false, optional: true, required: false
  private _failInterval?: number; 
  public get failInterval() {
    return this.getNumberAttribute('fail_interval');
  }
  public set failInterval(value: number) {
    this._failInterval = value;
  }
  public resetFailInterval() {
    this._failInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failIntervalInput() {
    return this._failInterval;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aaaa_query: cdktf.stringToTerraform(this._aaaaQuery),
      fail_interval: cdktf.numberToTerraform(this._failInterval),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aaaa_query: {
        value: cdktf.stringToHclTerraform(this._aaaaQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fail_interval: {
        value: cdktf.numberToHclTerraform(this._failInterval),
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
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
