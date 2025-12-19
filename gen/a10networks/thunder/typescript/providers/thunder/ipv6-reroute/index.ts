// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6RerouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#id Ipv6Reroute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#uuid Ipv6Reroute#uuid}
  */
  readonly uuid?: string;
  /**
  * suppress_protocols block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#suppress_protocols Ipv6Reroute#suppress_protocols}
  */
  readonly suppressProtocols?: Ipv6RerouteSuppressProtocols;
}
export interface Ipv6RerouteSuppressProtocols {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#connected Ipv6Reroute#connected}
  */
  readonly connected?: number;
  /**
  * EBGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#ebgp Ipv6Reroute#ebgp}
  */
  readonly ebgp?: number;
  /**
  * IBGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#ibgp Ipv6Reroute#ibgp}
  */
  readonly ibgp?: number;
  /**
  * ISIS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#isis Ipv6Reroute#isis}
  */
  readonly isis?: number;
  /**
  * OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#ospf Ipv6Reroute#ospf}
  */
  readonly ospf?: number;
  /**
  * RIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#rip Ipv6Reroute#rip}
  */
  readonly rip?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#static Ipv6Reroute#static}
  */
  readonly static?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#uuid Ipv6Reroute#uuid}
  */
  readonly uuid?: string;
}

export function ipv6RerouteSuppressProtocolsToTerraform(struct?: Ipv6RerouteSuppressProtocolsOutputReference | Ipv6RerouteSuppressProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connected: cdktf.numberToTerraform(struct!.connected),
    ebgp: cdktf.numberToTerraform(struct!.ebgp),
    ibgp: cdktf.numberToTerraform(struct!.ibgp),
    isis: cdktf.numberToTerraform(struct!.isis),
    ospf: cdktf.numberToTerraform(struct!.ospf),
    rip: cdktf.numberToTerraform(struct!.rip),
    static: cdktf.numberToTerraform(struct!.static),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ipv6RerouteSuppressProtocolsToHclTerraform(struct?: Ipv6RerouteSuppressProtocolsOutputReference | Ipv6RerouteSuppressProtocols): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connected: {
      value: cdktf.numberToHclTerraform(struct!.connected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ebgp: {
      value: cdktf.numberToHclTerraform(struct!.ebgp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ibgp: {
      value: cdktf.numberToHclTerraform(struct!.ibgp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    isis: {
      value: cdktf.numberToHclTerraform(struct!.isis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ospf: {
      value: cdktf.numberToHclTerraform(struct!.ospf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rip: {
      value: cdktf.numberToHclTerraform(struct!.rip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static: {
      value: cdktf.numberToHclTerraform(struct!.static),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv6RerouteSuppressProtocolsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ipv6RerouteSuppressProtocols | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connected !== undefined) {
      hasAnyValues = true;
      internalValueResult.connected = this._connected;
    }
    if (this._ebgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ebgp = this._ebgp;
    }
    if (this._ibgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ibgp = this._ibgp;
    }
    if (this._isis !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis;
    }
    if (this._ospf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospf = this._ospf;
    }
    if (this._rip !== undefined) {
      hasAnyValues = true;
      internalValueResult.rip = this._rip;
    }
    if (this._static !== undefined) {
      hasAnyValues = true;
      internalValueResult.static = this._static;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv6RerouteSuppressProtocols | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connected = undefined;
      this._ebgp = undefined;
      this._ibgp = undefined;
      this._isis = undefined;
      this._ospf = undefined;
      this._rip = undefined;
      this._static = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connected = value.connected;
      this._ebgp = value.ebgp;
      this._ibgp = value.ibgp;
      this._isis = value.isis;
      this._ospf = value.ospf;
      this._rip = value.rip;
      this._static = value.static;
      this._uuid = value.uuid;
    }
  }

  // connected - computed: false, optional: true, required: false
  private _connected?: number; 
  public get connected() {
    return this.getNumberAttribute('connected');
  }
  public set connected(value: number) {
    this._connected = value;
  }
  public resetConnected() {
    this._connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected;
  }

  // ebgp - computed: false, optional: true, required: false
  private _ebgp?: number; 
  public get ebgp() {
    return this.getNumberAttribute('ebgp');
  }
  public set ebgp(value: number) {
    this._ebgp = value;
  }
  public resetEbgp() {
    this._ebgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpInput() {
    return this._ebgp;
  }

  // ibgp - computed: false, optional: true, required: false
  private _ibgp?: number; 
  public get ibgp() {
    return this.getNumberAttribute('ibgp');
  }
  public set ibgp(value: number) {
    this._ibgp = value;
  }
  public resetIbgp() {
    this._ibgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ibgpInput() {
    return this._ibgp;
  }

  // isis - computed: false, optional: true, required: false
  private _isis?: number; 
  public get isis() {
    return this.getNumberAttribute('isis');
  }
  public set isis(value: number) {
    this._isis = value;
  }
  public resetIsis() {
    this._isis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf?: number; 
  public get ospf() {
    return this.getNumberAttribute('ospf');
  }
  public set ospf(value: number) {
    this._ospf = value;
  }
  public resetOspf() {
    this._ospf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf;
  }

  // rip - computed: false, optional: true, required: false
  private _rip?: number; 
  public get rip() {
    return this.getNumberAttribute('rip');
  }
  public set rip(value: number) {
    this._rip = value;
  }
  public resetRip() {
    this._rip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip;
  }

  // static - computed: false, optional: true, required: false
  private _static?: number; 
  public get static() {
    return this.getNumberAttribute('static');
  }
  public set static(value: number) {
    this._static = value;
  }
  public resetStatic() {
    this._static = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticInput() {
    return this._static;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute thunder_ipv6_reroute}
*/
export class Ipv6Reroute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_reroute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6Reroute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6Reroute to import
  * @param importFromId The id of the existing Ipv6Reroute that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6Reroute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_reroute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ipv6_reroute thunder_ipv6_reroute} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6RerouteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv6RerouteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_reroute',
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._suppressProtocols.internalValue = config.suppressProtocols;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // suppress_protocols - computed: false, optional: true, required: false
  private _suppressProtocols = new Ipv6RerouteSuppressProtocolsOutputReference(this, "suppress_protocols");
  public get suppressProtocols() {
    return this._suppressProtocols;
  }
  public putSuppressProtocols(value: Ipv6RerouteSuppressProtocols) {
    this._suppressProtocols.internalValue = value;
  }
  public resetSuppressProtocols() {
    this._suppressProtocols.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressProtocolsInput() {
    return this._suppressProtocols.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      suppress_protocols: ipv6RerouteSuppressProtocolsToTerraform(this._suppressProtocols.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_protocols: {
        value: ipv6RerouteSuppressProtocolsToHclTerraform(this._suppressProtocols.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv6RerouteSuppressProtocolsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
