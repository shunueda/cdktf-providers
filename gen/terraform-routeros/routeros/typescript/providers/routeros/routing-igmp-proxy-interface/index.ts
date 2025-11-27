// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoutingIgmpProxyInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface#___path___ RoutingIgmpProxyInterface#___path___}
  */
  readonly path?: string;
  /**
  * By default, only packets from directly attached subnets are accepted. This parameter can be used to specify a list of alternative valid packet source subnets, both for data or IGMP packets. Has an effect only on the upstream interface. Should be used when the source of multicast data often is in a different IP network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface#alternative_subnets RoutingIgmpProxyInterface#alternative_subnets}
  */
  readonly alternativeSubnets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface#comment RoutingIgmpProxyInterface#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface#disabled RoutingIgmpProxyInterface#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface#id RoutingIgmpProxyInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface#interface RoutingIgmpProxyInterface#interface}
  */
  readonly interface: string;
  /**
  * Minimal TTL. Packets received with a lower TTL value are ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface#threshold RoutingIgmpProxyInterface#threshold}
  */
  readonly threshold?: number;
  /**
  * The interface is called `upstream` if it's in the direction of the root of the multicast tree. An IGMP forwarding router must have exactly one upstream interface configured. The upstream interface is used to send out IGMP membership requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface#upstream RoutingIgmpProxyInterface#upstream}
  */
  readonly upstream?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface routeros_routing_igmp_proxy_interface}
*/
export class RoutingIgmpProxyInterface extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_routing_igmp_proxy_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RoutingIgmpProxyInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RoutingIgmpProxyInterface to import
  * @param importFromId The id of the existing RoutingIgmpProxyInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RoutingIgmpProxyInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_routing_igmp_proxy_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/routing_igmp_proxy_interface routeros_routing_igmp_proxy_interface} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoutingIgmpProxyInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: RoutingIgmpProxyInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_routing_igmp_proxy_interface',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._alternativeSubnets = config.alternativeSubnets;
    this._comment = config.comment;
    this._disabled = config.disabled;
    this._id = config.id;
    this._interface = config.interface;
    this._threshold = config.threshold;
    this._upstream = config.upstream;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // alternative_subnets - computed: false, optional: true, required: false
  private _alternativeSubnets?: string[]; 
  public get alternativeSubnets() {
    return cdktf.Fn.tolist(this.getListAttribute('alternative_subnets'));
  }
  public set alternativeSubnets(value: string[]) {
    this._alternativeSubnets = value;
  }
  public resetAlternativeSubnets() {
    this._alternativeSubnets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alternativeSubnetsInput() {
    return this._alternativeSubnets;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // disabled - computed: false, optional: true, required: false
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

  // inactive - computed: true, optional: false, required: false
  public get inactive() {
    return this.getBooleanAttribute('inactive');
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // upstream - computed: false, optional: true, required: false
  private _upstream?: boolean | cdktf.IResolvable; 
  public get upstream() {
    return this.getBooleanAttribute('upstream');
  }
  public set upstream(value: boolean | cdktf.IResolvable) {
    this._upstream = value;
  }
  public resetUpstream() {
    this._upstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      alternative_subnets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alternativeSubnets),
      comment: cdktf.stringToTerraform(this._comment),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      interface: cdktf.stringToTerraform(this._interface),
      threshold: cdktf.numberToTerraform(this._threshold),
      upstream: cdktf.booleanToTerraform(this._upstream),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alternative_subnets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alternativeSubnets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
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
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upstream: {
        value: cdktf.booleanToHclTerraform(this._upstream),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
