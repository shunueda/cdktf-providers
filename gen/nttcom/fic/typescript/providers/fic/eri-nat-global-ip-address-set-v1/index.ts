// https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EriNatGlobalIpAddressSetV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1#id EriNatGlobalIpAddressSetV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1#name EriNatGlobalIpAddressSetV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1#nat_id EriNatGlobalIpAddressSetV1#nat_id}
  */
  readonly natId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1#number_of_addresses EriNatGlobalIpAddressSetV1#number_of_addresses}
  */
  readonly numberOfAddresses: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1#router_id EriNatGlobalIpAddressSetV1#router_id}
  */
  readonly routerId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1#type EriNatGlobalIpAddressSetV1#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1#timeouts EriNatGlobalIpAddressSetV1#timeouts}
  */
  readonly timeouts?: EriNatGlobalIpAddressSetV1Timeouts;
}
export interface EriNatGlobalIpAddressSetV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1#create EriNatGlobalIpAddressSetV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1#delete EriNatGlobalIpAddressSetV1#delete}
  */
  readonly delete?: string;
}

export function eriNatGlobalIpAddressSetV1TimeoutsToTerraform(struct?: EriNatGlobalIpAddressSetV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function eriNatGlobalIpAddressSetV1TimeoutsToHclTerraform(struct?: EriNatGlobalIpAddressSetV1Timeouts | cdktf.IResolvable): any {
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

export class EriNatGlobalIpAddressSetV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EriNatGlobalIpAddressSetV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EriNatGlobalIpAddressSetV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1 fic_eri_nat_global_ip_address_set_v1}
*/
export class EriNatGlobalIpAddressSetV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fic_eri_nat_global_ip_address_set_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EriNatGlobalIpAddressSetV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EriNatGlobalIpAddressSetV1 to import
  * @param importFromId The id of the existing EriNatGlobalIpAddressSetV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EriNatGlobalIpAddressSetV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fic_eri_nat_global_ip_address_set_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nttcom/fic/0.5.6/docs/resources/eri_nat_global_ip_address_set_v1 fic_eri_nat_global_ip_address_set_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EriNatGlobalIpAddressSetV1Config
  */
  public constructor(scope: Construct, id: string, config: EriNatGlobalIpAddressSetV1Config) {
    super(scope, id, {
      terraformResourceType: 'fic_eri_nat_global_ip_address_set_v1',
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
    this._id = config.id;
    this._name = config.name;
    this._natId = config.natId;
    this._numberOfAddresses = config.numberOfAddresses;
    this._routerId = config.routerId;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return this.getListAttribute('addresses');
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

  // nat_id - computed: false, optional: false, required: true
  private _natId?: string; 
  public get natId() {
    return this.getStringAttribute('nat_id');
  }
  public set natId(value: string) {
    this._natId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natIdInput() {
    return this._natId;
  }

  // number_of_addresses - computed: false, optional: false, required: true
  private _numberOfAddresses?: number; 
  public get numberOfAddresses() {
    return this.getNumberAttribute('number_of_addresses');
  }
  public set numberOfAddresses(value: number) {
    this._numberOfAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfAddressesInput() {
    return this._numberOfAddresses;
  }

  // router_id - computed: false, optional: false, required: true
  private _routerId?: string; 
  public get routerId() {
    return this.getStringAttribute('router_id');
  }
  public set routerId(value: string) {
    this._routerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routerIdInput() {
    return this._routerId;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EriNatGlobalIpAddressSetV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EriNatGlobalIpAddressSetV1Timeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nat_id: cdktf.stringToTerraform(this._natId),
      number_of_addresses: cdktf.numberToTerraform(this._numberOfAddresses),
      router_id: cdktf.stringToTerraform(this._routerId),
      type: cdktf.stringToTerraform(this._type),
      timeouts: eriNatGlobalIpAddressSetV1TimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_id: {
        value: cdktf.stringToHclTerraform(this._natId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_of_addresses: {
        value: cdktf.numberToHclTerraform(this._numberOfAddresses),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      router_id: {
        value: cdktf.stringToHclTerraform(this._routerId),
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
      timeouts: {
        value: eriNatGlobalIpAddressSetV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EriNatGlobalIpAddressSetV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
