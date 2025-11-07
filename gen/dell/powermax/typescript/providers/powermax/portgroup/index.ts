// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/portgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PortgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the portgroup. Only alphanumeric characters, underscores ( _ ), and hyphens (-) are allowed. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/portgroup#name Portgroup#name}
  */
  readonly name: string;
  /**
  * The list of ports associated with the portgroup. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/portgroup#ports Portgroup#ports}
  */
  readonly ports: PortgroupPorts[] | cdktf.IResolvable;
  /**
  * The portgroup protocol. Protocols: SCSI_FC, iSCSI, NVMe_FC, NVMe_TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/portgroup#protocol Portgroup#protocol}
  */
  readonly protocol: string;
}
export interface PortgroupPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/portgroup#director_id Portgroup#director_id}
  */
  readonly directorId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/portgroup#port_id Portgroup#port_id}
  */
  readonly portId: string;
}

export function portgroupPortsToTerraform(struct?: PortgroupPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    director_id: cdktf.stringToTerraform(struct!.directorId),
    port_id: cdktf.stringToTerraform(struct!.portId),
  }
}


export function portgroupPortsToHclTerraform(struct?: PortgroupPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    director_id: {
      value: cdktf.stringToHclTerraform(struct!.directorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_id: {
      value: cdktf.stringToHclTerraform(struct!.portId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PortgroupPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PortgroupPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.directorId = this._directorId;
    }
    if (this._portId !== undefined) {
      hasAnyValues = true;
      internalValueResult.portId = this._portId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PortgroupPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directorId = undefined;
      this._portId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directorId = value.directorId;
      this._portId = value.portId;
    }
  }

  // director_id - computed: false, optional: false, required: true
  private _directorId?: string; 
  public get directorId() {
    return this.getStringAttribute('director_id');
  }
  public set directorId(value: string) {
    this._directorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directorIdInput() {
    return this._directorId;
  }

  // port_id - computed: false, optional: false, required: true
  private _portId?: string; 
  public get portId() {
    return this.getStringAttribute('port_id');
  }
  public set portId(value: string) {
    this._portId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portIdInput() {
    return this._portId;
  }
}

export class PortgroupPortsList extends cdktf.ComplexList {
  public internalValue? : PortgroupPorts[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PortgroupPortsOutputReference {
    return new PortgroupPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/portgroup powermax_portgroup}
*/
export class Portgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_portgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Portgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Portgroup to import
  * @param importFromId The id of the existing Portgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/portgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Portgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_portgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/portgroup powermax_portgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PortgroupConfig
  */
  public constructor(scope: Construct, id: string, config: PortgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'powermax_portgroup',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._ports.internalValue = config.ports;
    this._protocol = config.protocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // maskingview - computed: true, optional: false, required: false
  public get maskingview() {
    return this.getListAttribute('maskingview');
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

  // numofmaskingviews - computed: true, optional: false, required: false
  public get numofmaskingviews() {
    return this.getNumberAttribute('numofmaskingviews');
  }

  // numofports - computed: true, optional: false, required: false
  public get numofports() {
    return this.getNumberAttribute('numofports');
  }

  // ports - computed: false, optional: false, required: true
  private _ports = new PortgroupPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: PortgroupPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      ports: cdktf.listMapper(portgroupPortsToTerraform, false)(this._ports.internalValue),
      protocol: cdktf.stringToTerraform(this._protocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(portgroupPortsToHclTerraform, false)(this._ports.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PortgroupPortsList",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
