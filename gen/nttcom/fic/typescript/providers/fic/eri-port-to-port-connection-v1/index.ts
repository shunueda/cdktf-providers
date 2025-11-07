// https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EriPortToPortConnectionV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#bandwidth EriPortToPortConnectionV1#bandwidth}
  */
  readonly bandwidth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#destination_port_id EriPortToPortConnectionV1#destination_port_id}
  */
  readonly destinationPortId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#destination_vlan EriPortToPortConnectionV1#destination_vlan}
  */
  readonly destinationVlan: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#id EriPortToPortConnectionV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#name EriPortToPortConnectionV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#source_port_id EriPortToPortConnectionV1#source_port_id}
  */
  readonly sourcePortId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#source_vlan EriPortToPortConnectionV1#source_vlan}
  */
  readonly sourceVlan: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#timeouts EriPortToPortConnectionV1#timeouts}
  */
  readonly timeouts?: EriPortToPortConnectionV1Timeouts;
}
export interface EriPortToPortConnectionV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#create EriPortToPortConnectionV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#delete EriPortToPortConnectionV1#delete}
  */
  readonly delete?: string;
}

export function eriPortToPortConnectionV1TimeoutsToTerraform(struct?: EriPortToPortConnectionV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function eriPortToPortConnectionV1TimeoutsToHclTerraform(struct?: EriPortToPortConnectionV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EriPortToPortConnectionV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EriPortToPortConnectionV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EriPortToPortConnectionV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1 fic_eri_port_to_port_connection_v1}
*/
export class EriPortToPortConnectionV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fic_eri_port_to_port_connection_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EriPortToPortConnectionV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EriPortToPortConnectionV1 to import
  * @param importFromId The id of the existing EriPortToPortConnectionV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EriPortToPortConnectionV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fic_eri_port_to_port_connection_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_port_to_port_connection_v1 fic_eri_port_to_port_connection_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EriPortToPortConnectionV1Config
  */
  public constructor(scope: Construct, id: string, config: EriPortToPortConnectionV1Config) {
    super(scope, id, {
      terraformResourceType: 'fic_eri_port_to_port_connection_v1',
      terraformGeneratorMetadata: {
        providerName: 'fic',
        providerVersion: '0.5.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bandwidth = config.bandwidth;
    this._destinationPortId = config.destinationPortId;
    this._destinationVlan = config.destinationVlan;
    this._id = config.id;
    this._name = config.name;
    this._sourcePortId = config.sourcePortId;
    this._sourceVlan = config.sourceVlan;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // area - computed: true, optional: false, required: false
  public get area() {
    return this.getStringAttribute('area');
  }

  // bandwidth - computed: false, optional: false, required: true
  private _bandwidth?: string; 
  public get bandwidth() {
    return this.getStringAttribute('bandwidth');
  }
  public set bandwidth(value: string) {
    this._bandwidth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthInput() {
    return this._bandwidth;
  }

  // destination_port_id - computed: false, optional: false, required: true
  private _destinationPortId?: string; 
  public get destinationPortId() {
    return this.getStringAttribute('destination_port_id');
  }
  public set destinationPortId(value: string) {
    this._destinationPortId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortIdInput() {
    return this._destinationPortId;
  }

  // destination_vlan - computed: false, optional: false, required: true
  private _destinationVlan?: number; 
  public get destinationVlan() {
    return this.getNumberAttribute('destination_vlan');
  }
  public set destinationVlan(value: number) {
    this._destinationVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationVlanInput() {
    return this._destinationVlan;
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

  // redundant - computed: true, optional: false, required: false
  public get redundant() {
    return this.getBooleanAttribute('redundant');
  }

  // source_port_id - computed: false, optional: false, required: true
  private _sourcePortId?: string; 
  public get sourcePortId() {
    return this.getStringAttribute('source_port_id');
  }
  public set sourcePortId(value: string) {
    this._sourcePortId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortIdInput() {
    return this._sourcePortId;
  }

  // source_vlan - computed: false, optional: false, required: true
  private _sourceVlan?: number; 
  public get sourceVlan() {
    return this.getNumberAttribute('source_vlan');
  }
  public set sourceVlan(value: number) {
    this._sourceVlan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceVlanInput() {
    return this._sourceVlan;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EriPortToPortConnectionV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EriPortToPortConnectionV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bandwidth: cdktf.stringToTerraform(this._bandwidth),
      destination_port_id: cdktf.stringToTerraform(this._destinationPortId),
      destination_vlan: cdktf.numberToTerraform(this._destinationVlan),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      source_port_id: cdktf.stringToTerraform(this._sourcePortId),
      source_vlan: cdktf.numberToTerraform(this._sourceVlan),
      timeouts: eriPortToPortConnectionV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bandwidth: {
        value: cdktf.stringToHclTerraform(this._bandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_port_id: {
        value: cdktf.stringToHclTerraform(this._destinationPortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_vlan: {
        value: cdktf.numberToHclTerraform(this._destinationVlan),
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
      source_port_id: {
        value: cdktf.stringToHclTerraform(this._sourcePortId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_vlan: {
        value: cdktf.numberToHclTerraform(this._sourceVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: eriPortToPortConnectionV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EriPortToPortConnectionV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
