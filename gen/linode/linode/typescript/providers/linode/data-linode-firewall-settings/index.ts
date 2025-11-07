// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewall_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeFirewallSettingsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataLinodeFirewallSettingsDefaultFirewallIds {
}

export function dataLinodeFirewallSettingsDefaultFirewallIdsToTerraform(struct?: DataLinodeFirewallSettingsDefaultFirewallIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeFirewallSettingsDefaultFirewallIdsToHclTerraform(struct?: DataLinodeFirewallSettingsDefaultFirewallIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeFirewallSettingsDefaultFirewallIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataLinodeFirewallSettingsDefaultFirewallIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeFirewallSettingsDefaultFirewallIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // linode - computed: true, optional: false, required: false
  public get linode() {
    return this.getNumberAttribute('linode');
  }

  // nodebalancer - computed: true, optional: false, required: false
  public get nodebalancer() {
    return this.getNumberAttribute('nodebalancer');
  }

  // public_interface - computed: true, optional: false, required: false
  public get publicInterface() {
    return this.getNumberAttribute('public_interface');
  }

  // vpc_interface - computed: true, optional: false, required: false
  public get vpcInterface() {
    return this.getNumberAttribute('vpc_interface');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewall_settings linode_firewall_settings}
*/
export class DataLinodeFirewallSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_firewall_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeFirewallSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeFirewallSettings to import
  * @param importFromId The id of the existing DataLinodeFirewallSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewall_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeFirewallSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_firewall_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/firewall_settings linode_firewall_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeFirewallSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLinodeFirewallSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'linode_firewall_settings',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_firewall_ids - computed: true, optional: false, required: false
  private _defaultFirewallIds = new DataLinodeFirewallSettingsDefaultFirewallIdsOutputReference(this, "default_firewall_ids");
  public get defaultFirewallIds() {
    return this._defaultFirewallIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
