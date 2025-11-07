// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentFirewallIpsetConfig extends cdktf.TerraformMetaArguments {
  /**
  * IPSet comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#comment VirtualEnvironmentFirewallIpset#comment}
  */
  readonly comment?: string;
  /**
  * The ID of the container to manage the firewall for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#container_id VirtualEnvironmentFirewallIpset#container_id}
  */
  readonly containerId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#id VirtualEnvironmentFirewallIpset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPSet name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#name VirtualEnvironmentFirewallIpset#name}
  */
  readonly name: string;
  /**
  * The name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#node_name VirtualEnvironmentFirewallIpset#node_name}
  */
  readonly nodeName?: string;
  /**
  * The ID of the VM to manage the firewall for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#vm_id VirtualEnvironmentFirewallIpset#vm_id}
  */
  readonly vmId?: number;
  /**
  * cidr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#cidr VirtualEnvironmentFirewallIpset#cidr}
  */
  readonly cidr?: VirtualEnvironmentFirewallIpsetCidr[] | cdktf.IResolvable;
}
export interface VirtualEnvironmentFirewallIpsetCidr {
  /**
  * IP/CIDR comment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#comment VirtualEnvironmentFirewallIpset#comment}
  */
  readonly comment?: string;
  /**
  * Network/IP specification in CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#name VirtualEnvironmentFirewallIpset#name}
  */
  readonly name: string;
  /**
  * No match this IP/CIDR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#nomatch VirtualEnvironmentFirewallIpset#nomatch}
  */
  readonly nomatch?: boolean | cdktf.IResolvable;
}

export function virtualEnvironmentFirewallIpsetCidrToTerraform(struct?: VirtualEnvironmentFirewallIpsetCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    nomatch: cdktf.booleanToTerraform(struct!.nomatch),
  }
}


export function virtualEnvironmentFirewallIpsetCidrToHclTerraform(struct?: VirtualEnvironmentFirewallIpsetCidr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nomatch: {
      value: cdktf.booleanToHclTerraform(struct!.nomatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentFirewallIpsetCidrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentFirewallIpsetCidr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nomatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.nomatch = this._nomatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentFirewallIpsetCidr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._nomatch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._name = value.name;
      this._nomatch = value.nomatch;
    }
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

  // nomatch - computed: false, optional: true, required: false
  private _nomatch?: boolean | cdktf.IResolvable; 
  public get nomatch() {
    return this.getBooleanAttribute('nomatch');
  }
  public set nomatch(value: boolean | cdktf.IResolvable) {
    this._nomatch = value;
  }
  public resetNomatch() {
    this._nomatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nomatchInput() {
    return this._nomatch;
  }
}

export class VirtualEnvironmentFirewallIpsetCidrList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentFirewallIpsetCidr[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentFirewallIpsetCidrOutputReference {
    return new VirtualEnvironmentFirewallIpsetCidrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset proxmox_virtual_environment_firewall_ipset}
*/
export class VirtualEnvironmentFirewallIpset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_firewall_ipset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentFirewallIpset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentFirewallIpset to import
  * @param importFromId The id of the existing VirtualEnvironmentFirewallIpset that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentFirewallIpset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_firewall_ipset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/resources/virtual_environment_firewall_ipset proxmox_virtual_environment_firewall_ipset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentFirewallIpsetConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentFirewallIpsetConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_firewall_ipset',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._comment = config.comment;
    this._containerId = config.containerId;
    this._id = config.id;
    this._name = config.name;
    this._nodeName = config.nodeName;
    this._vmId = config.vmId;
    this._cidr.internalValue = config.cidr;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // container_id - computed: false, optional: true, required: false
  private _containerId?: number; 
  public get containerId() {
    return this.getNumberAttribute('container_id');
  }
  public set containerId(value: number) {
    this._containerId = value;
  }
  public resetContainerId() {
    this._containerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerIdInput() {
    return this._containerId;
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

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // vm_id - computed: false, optional: true, required: false
  private _vmId?: number; 
  public get vmId() {
    return this.getNumberAttribute('vm_id');
  }
  public set vmId(value: number) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // cidr - computed: false, optional: true, required: false
  private _cidr = new VirtualEnvironmentFirewallIpsetCidrList(this, "cidr", false);
  public get cidr() {
    return this._cidr;
  }
  public putCidr(value: VirtualEnvironmentFirewallIpsetCidr[] | cdktf.IResolvable) {
    this._cidr.internalValue = value;
  }
  public resetCidr() {
    this._cidr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrInput() {
    return this._cidr.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      container_id: cdktf.numberToTerraform(this._containerId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_name: cdktf.stringToTerraform(this._nodeName),
      vm_id: cdktf.numberToTerraform(this._vmId),
      cidr: cdktf.listMapper(virtualEnvironmentFirewallIpsetCidrToTerraform, true)(this._cidr.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_id: {
        value: cdktf.numberToHclTerraform(this._containerId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_id: {
        value: cdktf.numberToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cidr: {
        value: cdktf.listMapperHcl(virtualEnvironmentFirewallIpsetCidrToHclTerraform, true)(this._cidr.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentFirewallIpsetCidrList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
