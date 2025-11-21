// https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/ip_access
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/ip_access#enable_coralogix_customer_support_access IpAccess#enable_coralogix_customer_support_access}
  */
  readonly enableCoralogixCustomerSupportAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/ip_access#ip_access IpAccess#ip_access}
  */
  readonly ipAccess?: IpAccessIpAccess[] | cdktf.IResolvable;
}
export interface IpAccessIpAccess {
  /**
  * Whether this IP access entry is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/ip_access#enabled IpAccess#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The IP range in CIDR notation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/ip_access#ip_range IpAccess#ip_range}
  */
  readonly ipRange: string;
  /**
  * The name of the IP access entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/ip_access#name IpAccess#name}
  */
  readonly name?: string;
}

export function ipAccessIpAccessToTerraform(struct?: IpAccessIpAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ip_range: cdktf.stringToTerraform(struct!.ipRange),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function ipAccessIpAccessToHclTerraform(struct?: IpAccessIpAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_range: {
      value: cdktf.stringToHclTerraform(struct!.ipRange),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpAccessIpAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpAccessIpAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ipRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRange = this._ipRange;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpAccessIpAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._ipRange = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._ipRange = value.ipRange;
      this._name = value.name;
    }
  }

  // enabled - computed: true, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ip_range - computed: true, optional: false, required: true
  private _ipRange?: string; 
  public get ipRange() {
    return this.getStringAttribute('ip_range');
  }
  public set ipRange(value: string) {
    this._ipRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangeInput() {
    return this._ipRange;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class IpAccessIpAccessList extends cdktf.ComplexList {
  public internalValue? : IpAccessIpAccess[] | cdktf.IResolvable

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
  public get(index: number): IpAccessIpAccessOutputReference {
    return new IpAccessIpAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/ip_access coralogix_ip_access}
*/
export class IpAccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_ip_access";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpAccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpAccess to import
  * @param importFromId The id of the existing IpAccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/ip_access#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpAccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_ip_access", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/3.0.0/docs/resources/ip_access coralogix_ip_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpAccessConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpAccessConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coralogix_ip_access',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '3.0.0',
        providerVersionConstraint: '3.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableCoralogixCustomerSupportAccess = config.enableCoralogixCustomerSupportAccess;
    this._ipAccess.internalValue = config.ipAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_coralogix_customer_support_access - computed: true, optional: true, required: false
  private _enableCoralogixCustomerSupportAccess?: string; 
  public get enableCoralogixCustomerSupportAccess() {
    return this.getStringAttribute('enable_coralogix_customer_support_access');
  }
  public set enableCoralogixCustomerSupportAccess(value: string) {
    this._enableCoralogixCustomerSupportAccess = value;
  }
  public resetEnableCoralogixCustomerSupportAccess() {
    this._enableCoralogixCustomerSupportAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCoralogixCustomerSupportAccessInput() {
    return this._enableCoralogixCustomerSupportAccess;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_access - computed: true, optional: true, required: false
  private _ipAccess = new IpAccessIpAccessList(this, "ip_access", true);
  public get ipAccess() {
    return this._ipAccess;
  }
  public putIpAccess(value: IpAccessIpAccess[] | cdktf.IResolvable) {
    this._ipAccess.internalValue = value;
  }
  public resetIpAccess() {
    this._ipAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAccessInput() {
    return this._ipAccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_coralogix_customer_support_access: cdktf.stringToTerraform(this._enableCoralogixCustomerSupportAccess),
      ip_access: cdktf.listMapper(ipAccessIpAccessToTerraform, false)(this._ipAccess.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_coralogix_customer_support_access: {
        value: cdktf.stringToHclTerraform(this._enableCoralogixCustomerSupportAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_access: {
        value: cdktf.listMapperHcl(ipAccessIpAccessToHclTerraform, false)(this._ipAccess.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IpAccessIpAccessList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
