// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/firewall_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The default firewall ID for a linode, nodebalancer, public_interface, or vpc_interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/firewall_settings#default_firewall_ids FirewallSettings#default_firewall_ids}
  */
  readonly defaultFirewallIds?: FirewallSettingsDefaultFirewallIds;
}
export interface FirewallSettingsDefaultFirewallIds {
  /**
  * The Linode's default firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/firewall_settings#linode FirewallSettings#linode}
  */
  readonly linode?: number;
  /**
  * The NodeBalancer's default firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/firewall_settings#nodebalancer FirewallSettings#nodebalancer}
  */
  readonly nodebalancer?: number;
  /**
  * The public interface's default firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/firewall_settings#public_interface FirewallSettings#public_interface}
  */
  readonly publicInterface?: number;
  /**
  * The VPC interface's default firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/firewall_settings#vpc_interface FirewallSettings#vpc_interface}
  */
  readonly vpcInterface?: number;
}

export function firewallSettingsDefaultFirewallIdsToTerraform(struct?: FirewallSettingsDefaultFirewallIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linode: cdktf.numberToTerraform(struct!.linode),
    nodebalancer: cdktf.numberToTerraform(struct!.nodebalancer),
    public_interface: cdktf.numberToTerraform(struct!.publicInterface),
    vpc_interface: cdktf.numberToTerraform(struct!.vpcInterface),
  }
}


export function firewallSettingsDefaultFirewallIdsToHclTerraform(struct?: FirewallSettingsDefaultFirewallIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    linode: {
      value: cdktf.numberToHclTerraform(struct!.linode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nodebalancer: {
      value: cdktf.numberToHclTerraform(struct!.nodebalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_interface: {
      value: cdktf.numberToHclTerraform(struct!.publicInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_interface: {
      value: cdktf.numberToHclTerraform(struct!.vpcInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallSettingsDefaultFirewallIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallSettingsDefaultFirewallIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linode !== undefined) {
      hasAnyValues = true;
      internalValueResult.linode = this._linode;
    }
    if (this._nodebalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodebalancer = this._nodebalancer;
    }
    if (this._publicInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicInterface = this._publicInterface;
    }
    if (this._vpcInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcInterface = this._vpcInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallSettingsDefaultFirewallIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._linode = undefined;
      this._nodebalancer = undefined;
      this._publicInterface = undefined;
      this._vpcInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._linode = value.linode;
      this._nodebalancer = value.nodebalancer;
      this._publicInterface = value.publicInterface;
      this._vpcInterface = value.vpcInterface;
    }
  }

  // linode - computed: true, optional: true, required: false
  private _linode?: number; 
  public get linode() {
    return this.getNumberAttribute('linode');
  }
  public set linode(value: number) {
    this._linode = value;
  }
  public resetLinode() {
    this._linode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeInput() {
    return this._linode;
  }

  // nodebalancer - computed: true, optional: true, required: false
  private _nodebalancer?: number; 
  public get nodebalancer() {
    return this.getNumberAttribute('nodebalancer');
  }
  public set nodebalancer(value: number) {
    this._nodebalancer = value;
  }
  public resetNodebalancer() {
    this._nodebalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodebalancerInput() {
    return this._nodebalancer;
  }

  // public_interface - computed: true, optional: true, required: false
  private _publicInterface?: number; 
  public get publicInterface() {
    return this.getNumberAttribute('public_interface');
  }
  public set publicInterface(value: number) {
    this._publicInterface = value;
  }
  public resetPublicInterface() {
    this._publicInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicInterfaceInput() {
    return this._publicInterface;
  }

  // vpc_interface - computed: true, optional: true, required: false
  private _vpcInterface?: number; 
  public get vpcInterface() {
    return this.getNumberAttribute('vpc_interface');
  }
  public set vpcInterface(value: number) {
    this._vpcInterface = value;
  }
  public resetVpcInterface() {
    this._vpcInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInterfaceInput() {
    return this._vpcInterface;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/firewall_settings linode_firewall_settings}
*/
export class FirewallSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_firewall_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallSettings to import
  * @param importFromId The id of the existing FirewallSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/firewall_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_firewall_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/firewall_settings linode_firewall_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FirewallSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_firewall_settings',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultFirewallIds.internalValue = config.defaultFirewallIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_firewall_ids - computed: false, optional: true, required: false
  private _defaultFirewallIds = new FirewallSettingsDefaultFirewallIdsOutputReference(this, "default_firewall_ids");
  public get defaultFirewallIds() {
    return this._defaultFirewallIds;
  }
  public putDefaultFirewallIds(value: FirewallSettingsDefaultFirewallIds) {
    this._defaultFirewallIds.internalValue = value;
  }
  public resetDefaultFirewallIds() {
    this._defaultFirewallIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFirewallIdsInput() {
    return this._defaultFirewallIds.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_firewall_ids: firewallSettingsDefaultFirewallIdsToTerraform(this._defaultFirewallIds.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_firewall_ids: {
        value: firewallSettingsDefaultFirewallIdsToHclTerraform(this._defaultFirewallIds.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallSettingsDefaultFirewallIds",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
