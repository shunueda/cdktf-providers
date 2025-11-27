// https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrackIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * IPv6 CIDR notation (e.g., 2001:41d0::/128)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6#block VrackIpv6#block}
  */
  readonly block: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6#id VrackIpv6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The internal name of your vrack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6#service_name VrackIpv6#service_name}
  */
  readonly serviceName: string;
  /**
  * bridged_subrange block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6#bridged_subrange VrackIpv6#bridged_subrange}
  */
  readonly bridgedSubrange?: VrackIpv6BridgedSubrange;
}
export interface VrackIpv6BridgedSubrange {
  /**
  * Slaac status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6#slaac VrackIpv6#slaac}
  */
  readonly slaac: string;
}

export function vrackIpv6BridgedSubrangeToTerraform(struct?: VrackIpv6BridgedSubrangeOutputReference | VrackIpv6BridgedSubrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slaac: cdktf.stringToTerraform(struct!.slaac),
  }
}


export function vrackIpv6BridgedSubrangeToHclTerraform(struct?: VrackIpv6BridgedSubrangeOutputReference | VrackIpv6BridgedSubrange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slaac: {
      value: cdktf.stringToHclTerraform(struct!.slaac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrackIpv6BridgedSubrangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrackIpv6BridgedSubrange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slaac !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaac = this._slaac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrackIpv6BridgedSubrange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slaac = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slaac = value.slaac;
    }
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // slaac - computed: false, optional: false, required: true
  private _slaac?: string; 
  public get slaac() {
    return this.getStringAttribute('slaac');
  }
  public set slaac(value: string) {
    this._slaac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slaacInput() {
    return this._slaac;
  }

  // subrange - computed: true, optional: false, required: false
  public get subrange() {
    return this.getStringAttribute('subrange');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6 ovh_vrack_ipv6}
*/
export class VrackIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_vrack_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrackIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrackIpv6 to import
  * @param importFromId The id of the existing VrackIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrackIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_vrack_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.10.0/docs/resources/vrack_ipv6 ovh_vrack_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrackIpv6Config
  */
  public constructor(scope: Construct, id: string, config: VrackIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'ovh_vrack_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.10.0',
        providerVersionConstraint: '2.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._block = config.block;
    this._id = config.id;
    this._serviceName = config.serviceName;
    this._bridgedSubrange.internalValue = config.bridgedSubrange;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block - computed: false, optional: false, required: true
  private _block?: string; 
  public get block() {
    return this.getStringAttribute('block');
  }
  public set block(value: string) {
    this._block = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
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

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // bridged_subrange - computed: false, optional: true, required: false
  private _bridgedSubrange = new VrackIpv6BridgedSubrangeOutputReference(this, "bridged_subrange");
  public get bridgedSubrange() {
    return this._bridgedSubrange;
  }
  public putBridgedSubrange(value: VrackIpv6BridgedSubrange) {
    this._bridgedSubrange.internalValue = value;
  }
  public resetBridgedSubrange() {
    this._bridgedSubrange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgedSubrangeInput() {
    return this._bridgedSubrange.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block: cdktf.stringToTerraform(this._block),
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
      bridged_subrange: vrackIpv6BridgedSubrangeToTerraform(this._bridgedSubrange.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block: {
        value: cdktf.stringToHclTerraform(this._block),
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
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bridged_subrange: {
        value: vrackIpv6BridgedSubrangeToHclTerraform(this._bridgedSubrange.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VrackIpv6BridgedSubrangeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
