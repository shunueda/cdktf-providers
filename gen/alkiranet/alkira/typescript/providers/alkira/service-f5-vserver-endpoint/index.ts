// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceF5VserverEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the F5 service associated with theF5 vServer Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#f5_service_id ServiceF5VserverEndpoint#f5_service_id}
  */
  readonly f5ServiceId: number;
  /**
  * An array of F5 service instance IDs. A maximum of 2 instances are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#f5_service_instance_ids ServiceF5VserverEndpoint#f5_service_instance_ids}
  */
  readonly f5ServiceInstanceIds: number[];
  /**
  * The FQDN prefix of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#fqdn_prefix ServiceF5VserverEndpoint#fqdn_prefix}
  */
  readonly fqdnPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#id ServiceF5VserverEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the F5 vServer Endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#name ServiceF5VserverEndpoint#name}
  */
  readonly name: string;
  /**
  * An array of ports or port ranges. Values can be mixed i.e. ['20', '100-200']. An array with only the value '-1' means any port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#port_ranges ServiceF5VserverEndpoint#port_ranges}
  */
  readonly portRanges: string[];
  /**
  * The portocol used for the endpoint. Can be one of `TCP` or `UDP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#protocol ServiceF5VserverEndpoint#protocol}
  */
  readonly protocol: string;
  /**
  * ID of the segment associated with the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#segment_id ServiceF5VserverEndpoint#segment_id}
  */
  readonly segmentId: string;
  /**
  * SNAT for the endpoint. Only `AUTOMAP` is supported for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#snat ServiceF5VserverEndpoint#snat}
  */
  readonly snat: string;
  /**
  * The type of endpoint. Only `ELB` is supported for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#type ServiceF5VserverEndpoint#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint alkira_service_f5_vserver_endpoint}
*/
export class ServiceF5VserverEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_service_f5_vserver_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceF5VserverEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceF5VserverEndpoint to import
  * @param importFromId The id of the existing ServiceF5VserverEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceF5VserverEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_service_f5_vserver_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_f5_vserver_endpoint alkira_service_f5_vserver_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceF5VserverEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceF5VserverEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_service_f5_vserver_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._f5ServiceId = config.f5ServiceId;
    this._f5ServiceInstanceIds = config.f5ServiceInstanceIds;
    this._fqdnPrefix = config.fqdnPrefix;
    this._id = config.id;
    this._name = config.name;
    this._portRanges = config.portRanges;
    this._protocol = config.protocol;
    this._segmentId = config.segmentId;
    this._snat = config.snat;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // f5_service_id - computed: false, optional: false, required: true
  private _f5ServiceId?: number; 
  public get f5ServiceId() {
    return this.getNumberAttribute('f5_service_id');
  }
  public set f5ServiceId(value: number) {
    this._f5ServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get f5ServiceIdInput() {
    return this._f5ServiceId;
  }

  // f5_service_instance_ids - computed: false, optional: false, required: true
  private _f5ServiceInstanceIds?: number[]; 
  public get f5ServiceInstanceIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('f5_service_instance_ids')));
  }
  public set f5ServiceInstanceIds(value: number[]) {
    this._f5ServiceInstanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get f5ServiceInstanceIdsInput() {
    return this._f5ServiceInstanceIds;
  }

  // fqdn_prefix - computed: false, optional: false, required: true
  private _fqdnPrefix?: string; 
  public get fqdnPrefix() {
    return this.getStringAttribute('fqdn_prefix');
  }
  public set fqdnPrefix(value: string) {
    this._fqdnPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnPrefixInput() {
    return this._fqdnPrefix;
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

  // port_ranges - computed: false, optional: false, required: true
  private _portRanges?: string[]; 
  public get portRanges() {
    return cdktf.Fn.tolist(this.getListAttribute('port_ranges'));
  }
  public set portRanges(value: string[]) {
    this._portRanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // snat - computed: false, optional: false, required: true
  private _snat?: string; 
  public get snat() {
    return this.getStringAttribute('snat');
  }
  public set snat(value: string) {
    this._snat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get snatInput() {
    return this._snat;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      f5_service_id: cdktf.numberToTerraform(this._f5ServiceId),
      f5_service_instance_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._f5ServiceInstanceIds),
      fqdn_prefix: cdktf.stringToTerraform(this._fqdnPrefix),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portRanges),
      protocol: cdktf.stringToTerraform(this._protocol),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      snat: cdktf.stringToTerraform(this._snat),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      f5_service_id: {
        value: cdktf.numberToHclTerraform(this._f5ServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      f5_service_instance_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._f5ServiceInstanceIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      fqdn_prefix: {
        value: cdktf.stringToHclTerraform(this._fqdnPrefix),
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
      port_ranges: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portRanges),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat: {
        value: cdktf.stringToHclTerraform(this._snat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
