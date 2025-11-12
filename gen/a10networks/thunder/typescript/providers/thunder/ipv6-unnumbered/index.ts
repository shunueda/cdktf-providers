// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_unnumbered
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv6UnnumberedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_unnumbered#id Ipv6Unnumbered#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Access List, Upon deny packet's source address will be NATed (ACL Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_unnumbered#use_source_acl Ipv6Unnumbered#use_source_acl}
  */
  readonly useSourceAcl?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_unnumbered#uuid Ipv6Unnumbered#uuid}
  */
  readonly uuid?: string;
  /**
  * use_source_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_unnumbered#use_source_ipv6 Ipv6Unnumbered#use_source_ipv6}
  */
  readonly useSourceIpv6?: Ipv6UnnumberedUseSourceIpv6;
}
export interface Ipv6UnnumberedUseSourceIpv6 {
  /**
  * IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_unnumbered#update_source_ipv6 Ipv6Unnumbered#update_source_ipv6}
  */
  readonly updateSourceIpv6?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_unnumbered#uuid Ipv6Unnumbered#uuid}
  */
  readonly uuid?: string;
}

export function ipv6UnnumberedUseSourceIpv6ToTerraform(struct?: Ipv6UnnumberedUseSourceIpv6OutputReference | Ipv6UnnumberedUseSourceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    update_source_ipv6: cdktf.stringToTerraform(struct!.updateSourceIpv6),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ipv6UnnumberedUseSourceIpv6ToHclTerraform(struct?: Ipv6UnnumberedUseSourceIpv6OutputReference | Ipv6UnnumberedUseSourceIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    update_source_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.updateSourceIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class Ipv6UnnumberedUseSourceIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Ipv6UnnumberedUseSourceIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._updateSourceIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSourceIpv6 = this._updateSourceIpv6;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv6UnnumberedUseSourceIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._updateSourceIpv6 = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._updateSourceIpv6 = value.updateSourceIpv6;
      this._uuid = value.uuid;
    }
  }

  // update_source_ipv6 - computed: false, optional: true, required: false
  private _updateSourceIpv6?: string; 
  public get updateSourceIpv6() {
    return this.getStringAttribute('update_source_ipv6');
  }
  public set updateSourceIpv6(value: string) {
    this._updateSourceIpv6 = value;
  }
  public resetUpdateSourceIpv6() {
    this._updateSourceIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSourceIpv6Input() {
    return this._updateSourceIpv6;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_unnumbered thunder_ipv6_unnumbered}
*/
export class Ipv6Unnumbered extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ipv6_unnumbered";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv6Unnumbered resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv6Unnumbered to import
  * @param importFromId The id of the existing Ipv6Unnumbered that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_unnumbered#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv6Unnumbered to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ipv6_unnumbered", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ipv6_unnumbered thunder_ipv6_unnumbered} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv6UnnumberedConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv6UnnumberedConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ipv6_unnumbered',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._useSourceAcl = config.useSourceAcl;
    this._uuid = config.uuid;
    this._useSourceIpv6.internalValue = config.useSourceIpv6;
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

  // use_source_acl - computed: false, optional: true, required: false
  private _useSourceAcl?: string; 
  public get useSourceAcl() {
    return this.getStringAttribute('use_source_acl');
  }
  public set useSourceAcl(value: string) {
    this._useSourceAcl = value;
  }
  public resetUseSourceAcl() {
    this._useSourceAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceAclInput() {
    return this._useSourceAcl;
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

  // use_source_ipv6 - computed: false, optional: true, required: false
  private _useSourceIpv6 = new Ipv6UnnumberedUseSourceIpv6OutputReference(this, "use_source_ipv6");
  public get useSourceIpv6() {
    return this._useSourceIpv6;
  }
  public putUseSourceIpv6(value: Ipv6UnnumberedUseSourceIpv6) {
    this._useSourceIpv6.internalValue = value;
  }
  public resetUseSourceIpv6() {
    this._useSourceIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSourceIpv6Input() {
    return this._useSourceIpv6.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      use_source_acl: cdktf.stringToTerraform(this._useSourceAcl),
      uuid: cdktf.stringToTerraform(this._uuid),
      use_source_ipv6: ipv6UnnumberedUseSourceIpv6ToTerraform(this._useSourceIpv6.internalValue),
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
      use_source_acl: {
        value: cdktf.stringToHclTerraform(this._useSourceAcl),
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
      use_source_ipv6: {
        value: ipv6UnnumberedUseSourceIpv6ToHclTerraform(this._useSourceIpv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv6UnnumberedUseSourceIpv6List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
