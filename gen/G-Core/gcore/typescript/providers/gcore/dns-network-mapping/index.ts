// https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/dns_network_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsNetworkMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/dns_network_mapping#id DnsNetworkMapping#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/dns_network_mapping#name DnsNetworkMapping#name}
  */
  readonly name: string;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/dns_network_mapping#mapping DnsNetworkMapping#mapping}
  */
  readonly mapping: DnsNetworkMappingMapping[] | cdktf.IResolvable;
}
export interface DnsNetworkMappingMapping {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/dns_network_mapping#cidr4 DnsNetworkMapping#cidr4}
  */
  readonly cidr4?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/dns_network_mapping#cidr6 DnsNetworkMapping#cidr6}
  */
  readonly cidr6?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/dns_network_mapping#tags DnsNetworkMapping#tags}
  */
  readonly tags: string[];
}

export function dnsNetworkMappingMappingToTerraform(struct?: DnsNetworkMappingMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidr4: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidr4),
    cidr6: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidr6),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function dnsNetworkMappingMappingToHclTerraform(struct?: DnsNetworkMappingMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidr4: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidr4),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cidr6: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidr6),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsNetworkMappingMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DnsNetworkMappingMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidr4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr4 = this._cidr4;
    }
    if (this._cidr6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidr6 = this._cidr6;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsNetworkMappingMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cidr4 = undefined;
      this._cidr6 = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cidr4 = value.cidr4;
      this._cidr6 = value.cidr6;
      this._tags = value.tags;
    }
  }

  // cidr4 - computed: false, optional: true, required: false
  private _cidr4?: string[]; 
  public get cidr4() {
    return this.getListAttribute('cidr4');
  }
  public set cidr4(value: string[]) {
    this._cidr4 = value;
  }
  public resetCidr4() {
    this._cidr4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidr4Input() {
    return this._cidr4;
  }

  // cidr6 - computed: false, optional: true, required: false
  private _cidr6?: string[]; 
  public get cidr6() {
    return this.getListAttribute('cidr6');
  }
  public set cidr6(value: string[]) {
    this._cidr6 = value;
  }
  public resetCidr6() {
    this._cidr6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidr6Input() {
    return this._cidr6;
  }

  // tags - computed: false, optional: false, required: true
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class DnsNetworkMappingMappingList extends cdktf.ComplexList {
  public internalValue? : DnsNetworkMappingMapping[] | cdktf.IResolvable

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
  public get(index: number): DnsNetworkMappingMappingOutputReference {
    return new DnsNetworkMappingMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/dns_network_mapping gcore_dns_network_mapping}
*/
export class DnsNetworkMapping extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_dns_network_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsNetworkMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsNetworkMapping to import
  * @param importFromId The id of the existing DnsNetworkMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/dns_network_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsNetworkMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_dns_network_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/dns_network_mapping gcore_dns_network_mapping} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsNetworkMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DnsNetworkMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_dns_network_mapping',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.4',
        providerVersionConstraint: '0.32.4'
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
    this._mapping.internalValue = config.mapping;
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

  // mapping - computed: false, optional: false, required: true
  private _mapping = new DnsNetworkMappingMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: DnsNetworkMappingMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      mapping: cdktf.listMapper(dnsNetworkMappingMappingToTerraform, true)(this._mapping.internalValue),
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
      mapping: {
        value: cdktf.listMapperHcl(dnsNetworkMappingMappingToHclTerraform, true)(this._mapping.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DnsNetworkMappingMappingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
