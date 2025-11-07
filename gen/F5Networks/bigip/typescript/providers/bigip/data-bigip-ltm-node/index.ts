// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBigipLtmNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP address of the node of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#address DataBigipLtmNode#address}
  */
  readonly address?: string;
  /**
  * User defined description of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#description DataBigipLtmNode#description}
  */
  readonly description?: string;
  /**
  * Full path of the node (partition and name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#full_path DataBigipLtmNode#full_path}
  */
  readonly fullPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#id DataBigipLtmNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#name DataBigipLtmNode#name}
  */
  readonly name: string;
  /**
  * Partition of resource group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#partition DataBigipLtmNode#partition}
  */
  readonly partition: string;
  /**
  * fqdn block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#fqdn DataBigipLtmNode#fqdn}
  */
  readonly fqdn?: DataBigipLtmNodeFqdn;
}
export interface DataBigipLtmNodeFqdn {
  /**
  * The FQDN node's address family.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#address_family DataBigipLtmNode#address_family}
  */
  readonly addressFamily?: string;
  /**
  * Specifies if the node should scale to the IP address set returned by DNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#autopopulate DataBigipLtmNode#autopopulate}
  */
  readonly autopopulate?: string;
  /**
  * The number of attempts to resolve a domain name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#downinterval DataBigipLtmNode#downinterval}
  */
  readonly downinterval?: number;
  /**
  * The amount of time before sending the next DNS query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#interval DataBigipLtmNode#interval}
  */
  readonly interval?: string;
  /**
  * The fully qualified domain name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#name DataBigipLtmNode#name}
  */
  readonly name?: string;
}

export function dataBigipLtmNodeFqdnToTerraform(struct?: DataBigipLtmNodeFqdnOutputReference | DataBigipLtmNodeFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    autopopulate: cdktf.stringToTerraform(struct!.autopopulate),
    downinterval: cdktf.numberToTerraform(struct!.downinterval),
    interval: cdktf.stringToTerraform(struct!.interval),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataBigipLtmNodeFqdnToHclTerraform(struct?: DataBigipLtmNodeFqdnOutputReference | DataBigipLtmNodeFqdn): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autopopulate: {
      value: cdktf.stringToHclTerraform(struct!.autopopulate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    downinterval: {
      value: cdktf.numberToHclTerraform(struct!.downinterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
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

export class DataBigipLtmNodeFqdnOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataBigipLtmNodeFqdn | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._autopopulate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autopopulate = this._autopopulate;
    }
    if (this._downinterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.downinterval = this._downinterval;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBigipLtmNodeFqdn | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addressFamily = undefined;
      this._autopopulate = undefined;
      this._downinterval = undefined;
      this._interval = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addressFamily = value.addressFamily;
      this._autopopulate = value.autopopulate;
      this._downinterval = value.downinterval;
      this._interval = value.interval;
      this._name = value.name;
    }
  }

  // address_family - computed: false, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // autopopulate - computed: true, optional: true, required: false
  private _autopopulate?: string; 
  public get autopopulate() {
    return this.getStringAttribute('autopopulate');
  }
  public set autopopulate(value: string) {
    this._autopopulate = value;
  }
  public resetAutopopulate() {
    this._autopopulate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autopopulateInput() {
    return this._autopopulate;
  }

  // downinterval - computed: true, optional: true, required: false
  private _downinterval?: number; 
  public get downinterval() {
    return this.getNumberAttribute('downinterval');
  }
  public set downinterval(value: number) {
    this._downinterval = value;
  }
  public resetDowninterval() {
    this._downinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downintervalInput() {
    return this._downinterval;
  }

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // name - computed: false, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node bigip_ltm_node}
*/
export class DataBigipLtmNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBigipLtmNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBigipLtmNode to import
  * @param importFromId The id of the existing DataBigipLtmNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBigipLtmNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/data-sources/ltm_node bigip_ltm_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBigipLtmNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataBigipLtmNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_node',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._description = config.description;
    this._fullPath = config.fullPath;
    this._id = config.id;
    this._name = config.name;
    this._partition = config.partition;
    this._fqdn.internalValue = config.fqdn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // connection_limit - computed: true, optional: false, required: false
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dynamic_ratio - computed: true, optional: false, required: false
  public get dynamicRatio() {
    return this.getNumberAttribute('dynamic_ratio');
  }

  // full_path - computed: false, optional: true, required: false
  private _fullPath?: string; 
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }
  public set fullPath(value: string) {
    this._fullPath = value;
  }
  public resetFullPath() {
    this._fullPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullPathInput() {
    return this._fullPath;
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

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getStringAttribute('monitor');
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

  // partition - computed: false, optional: false, required: true
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // rate_limit - computed: true, optional: false, required: false
  public get rateLimit() {
    return this.getStringAttribute('rate_limit');
  }

  // ratio - computed: true, optional: false, required: false
  public get ratio() {
    return this.getNumberAttribute('ratio');
  }

  // session - computed: true, optional: false, required: false
  public get session() {
    return this.getStringAttribute('session');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // fqdn - computed: false, optional: true, required: false
  private _fqdn = new DataBigipLtmNodeFqdnOutputReference(this, "fqdn");
  public get fqdn() {
    return this._fqdn;
  }
  public putFqdn(value: DataBigipLtmNodeFqdn) {
    this._fqdn.internalValue = value;
  }
  public resetFqdn() {
    this._fqdn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      description: cdktf.stringToTerraform(this._description),
      full_path: cdktf.stringToTerraform(this._fullPath),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      fqdn: dataBigipLtmNodeFqdnToTerraform(this._fqdn.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_path: {
        value: cdktf.stringToHclTerraform(this._fullPath),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fqdn: {
        value: dataBigipLtmNodeFqdnToHclTerraform(this._fqdn.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataBigipLtmNodeFqdnList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
