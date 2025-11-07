// https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/firewall_nat_one_to_one
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpnsenseFirewallNatOneToOneConfig extends cdktf.TerraformMetaArguments {
  /**
  * UUID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/firewall_nat_one_to_one#id DataOpnsenseFirewallNatOneToOne#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataOpnsenseFirewallNatOneToOneDestination {
}

export function dataOpnsenseFirewallNatOneToOneDestinationToTerraform(struct?: DataOpnsenseFirewallNatOneToOneDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallNatOneToOneDestinationToHclTerraform(struct?: DataOpnsenseFirewallNatOneToOneDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallNatOneToOneDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallNatOneToOneDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallNatOneToOneDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invert - computed: true, optional: false, required: false
  public get invert() {
    return this.getBooleanAttribute('invert');
  }

  // net - computed: true, optional: false, required: false
  public get net() {
    return this.getStringAttribute('net');
  }
}
export interface DataOpnsenseFirewallNatOneToOneSource {
}

export function dataOpnsenseFirewallNatOneToOneSourceToTerraform(struct?: DataOpnsenseFirewallNatOneToOneSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpnsenseFirewallNatOneToOneSourceToHclTerraform(struct?: DataOpnsenseFirewallNatOneToOneSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpnsenseFirewallNatOneToOneSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpnsenseFirewallNatOneToOneSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpnsenseFirewallNatOneToOneSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // invert - computed: true, optional: false, required: false
  public get invert() {
    return this.getBooleanAttribute('invert');
  }

  // net - computed: true, optional: false, required: false
  public get net() {
    return this.getStringAttribute('net');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/firewall_nat_one_to_one opnsense_firewall_nat_one_to_one}
*/
export class DataOpnsenseFirewallNatOneToOne extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opnsense_firewall_nat_one_to_one";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpnsenseFirewallNatOneToOne resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpnsenseFirewallNatOneToOne to import
  * @param importFromId The id of the existing DataOpnsenseFirewallNatOneToOne that should be imported. Refer to the {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/firewall_nat_one_to_one#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpnsenseFirewallNatOneToOne to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opnsense_firewall_nat_one_to_one", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/browningluke/opnsense/0.16.0/docs/data-sources/firewall_nat_one_to_one opnsense_firewall_nat_one_to_one} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpnsenseFirewallNatOneToOneConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpnsenseFirewallNatOneToOneConfig) {
    super(scope, id, {
      terraformResourceType: 'opnsense_firewall_nat_one_to_one',
      terraformGeneratorMetadata: {
        providerName: 'opnsense',
        providerVersion: '0.16.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // categories - computed: true, optional: false, required: false
  public get categories() {
    return cdktf.Fn.tolist(this.getListAttribute('categories'));
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination - computed: true, optional: false, required: false
  private _destination = new DataOpnsenseFirewallNatOneToOneDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // external_net - computed: true, optional: false, required: false
  public get externalNet() {
    return this.getStringAttribute('external_net');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // nat_reflection - computed: true, optional: false, required: false
  public get natReflection() {
    return this.getStringAttribute('nat_reflection');
  }

  // sequence - computed: true, optional: false, required: false
  public get sequence() {
    return this.getNumberAttribute('sequence');
  }

  // source - computed: true, optional: false, required: false
  private _source = new DataOpnsenseFirewallNatOneToOneSourceOutputReference(this, "source");
  public get source() {
    return this._source;
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
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
