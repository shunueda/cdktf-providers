// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DavisCopilotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Please note that once enabled, you still need to [assign permissions](https://dt-url.net/rh22idn "Davis CoPilot permissions") to the relevant user groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot#enable_copilot DavisCopilot#enable_copilot}
  */
  readonly enableCopilot: boolean | cdktf.IResolvable;
  /**
  * You can enrich Davis CoPilot with your environment data. This lets you generate more accurate queries that identify and reference relevant entities, events, spans, logs, and metrics from your environment. Once enabled, Davis CoPilot periodically scans your Grail data to create its own semantic index. Please note, it can take up to 24 hours to reflect changes. Learn more about [environment-aware queries](https://dt-url.net/4g42iu7 "Davis CoPilot environment aware queries").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot#enable_tenant_aware_data_mining DavisCopilot#enable_tenant_aware_data_mining}
  */
  readonly enableTenantAwareDataMining?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot#id DavisCopilot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * blocklist_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot#blocklist_entries DavisCopilot#blocklist_entries}
  */
  readonly blocklistEntries?: DavisCopilotBlocklistEntries;
}
export interface DavisCopilotBlocklistEntriesBlocklistEntrie {
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot#name DavisCopilot#name}
  */
  readonly name: string;
  /**
  * Possible Values: `BUCKET`, `TABLE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot#type DavisCopilot#type}
  */
  readonly type: string;
}

export function davisCopilotBlocklistEntriesBlocklistEntrieToTerraform(struct?: DavisCopilotBlocklistEntriesBlocklistEntrie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function davisCopilotBlocklistEntriesBlocklistEntrieToHclTerraform(struct?: DavisCopilotBlocklistEntriesBlocklistEntrie | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DavisCopilotBlocklistEntriesBlocklistEntrieOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DavisCopilotBlocklistEntriesBlocklistEntrie | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DavisCopilotBlocklistEntriesBlocklistEntrie | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
    }
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
}

export class DavisCopilotBlocklistEntriesBlocklistEntrieList extends cdktf.ComplexList {
  public internalValue? : DavisCopilotBlocklistEntriesBlocklistEntrie[] | cdktf.IResolvable

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
  public get(index: number): DavisCopilotBlocklistEntriesBlocklistEntrieOutputReference {
    return new DavisCopilotBlocklistEntriesBlocklistEntrieOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DavisCopilotBlocklistEntries {
  /**
  * blocklist_entrie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot#blocklist_entrie DavisCopilot#blocklist_entrie}
  */
  readonly blocklistEntrie: DavisCopilotBlocklistEntriesBlocklistEntrie[] | cdktf.IResolvable;
}

export function davisCopilotBlocklistEntriesToTerraform(struct?: DavisCopilotBlocklistEntriesOutputReference | DavisCopilotBlocklistEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocklist_entrie: cdktf.listMapper(davisCopilotBlocklistEntriesBlocklistEntrieToTerraform, true)(struct!.blocklistEntrie),
  }
}


export function davisCopilotBlocklistEntriesToHclTerraform(struct?: DavisCopilotBlocklistEntriesOutputReference | DavisCopilotBlocklistEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocklist_entrie: {
      value: cdktf.listMapperHcl(davisCopilotBlocklistEntriesBlocklistEntrieToHclTerraform, true)(struct!.blocklistEntrie),
      isBlock: true,
      type: "list",
      storageClassType: "DavisCopilotBlocklistEntriesBlocklistEntrieList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DavisCopilotBlocklistEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DavisCopilotBlocklistEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blocklistEntrie?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocklistEntrie = this._blocklistEntrie?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DavisCopilotBlocklistEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blocklistEntrie.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blocklistEntrie.internalValue = value.blocklistEntrie;
    }
  }

  // blocklist_entrie - computed: false, optional: false, required: true
  private _blocklistEntrie = new DavisCopilotBlocklistEntriesBlocklistEntrieList(this, "blocklist_entrie", false);
  public get blocklistEntrie() {
    return this._blocklistEntrie;
  }
  public putBlocklistEntrie(value: DavisCopilotBlocklistEntriesBlocklistEntrie[] | cdktf.IResolvable) {
    this._blocklistEntrie.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blocklistEntrieInput() {
    return this._blocklistEntrie.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot dynatrace_davis_copilot}
*/
export class DavisCopilot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_davis_copilot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DavisCopilot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DavisCopilot to import
  * @param importFromId The id of the existing DavisCopilot that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DavisCopilot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_davis_copilot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/davis_copilot dynatrace_davis_copilot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DavisCopilotConfig
  */
  public constructor(scope: Construct, id: string, config: DavisCopilotConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_davis_copilot',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableCopilot = config.enableCopilot;
    this._enableTenantAwareDataMining = config.enableTenantAwareDataMining;
    this._id = config.id;
    this._blocklistEntries.internalValue = config.blocklistEntries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_copilot - computed: false, optional: false, required: true
  private _enableCopilot?: boolean | cdktf.IResolvable; 
  public get enableCopilot() {
    return this.getBooleanAttribute('enable_copilot');
  }
  public set enableCopilot(value: boolean | cdktf.IResolvable) {
    this._enableCopilot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCopilotInput() {
    return this._enableCopilot;
  }

  // enable_tenant_aware_data_mining - computed: false, optional: true, required: false
  private _enableTenantAwareDataMining?: boolean | cdktf.IResolvable; 
  public get enableTenantAwareDataMining() {
    return this.getBooleanAttribute('enable_tenant_aware_data_mining');
  }
  public set enableTenantAwareDataMining(value: boolean | cdktf.IResolvable) {
    this._enableTenantAwareDataMining = value;
  }
  public resetEnableTenantAwareDataMining() {
    this._enableTenantAwareDataMining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTenantAwareDataMiningInput() {
    return this._enableTenantAwareDataMining;
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

  // blocklist_entries - computed: false, optional: true, required: false
  private _blocklistEntries = new DavisCopilotBlocklistEntriesOutputReference(this, "blocklist_entries");
  public get blocklistEntries() {
    return this._blocklistEntries;
  }
  public putBlocklistEntries(value: DavisCopilotBlocklistEntries) {
    this._blocklistEntries.internalValue = value;
  }
  public resetBlocklistEntries() {
    this._blocklistEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocklistEntriesInput() {
    return this._blocklistEntries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_copilot: cdktf.booleanToTerraform(this._enableCopilot),
      enable_tenant_aware_data_mining: cdktf.booleanToTerraform(this._enableTenantAwareDataMining),
      id: cdktf.stringToTerraform(this._id),
      blocklist_entries: davisCopilotBlocklistEntriesToTerraform(this._blocklistEntries.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_copilot: {
        value: cdktf.booleanToHclTerraform(this._enableCopilot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tenant_aware_data_mining: {
        value: cdktf.booleanToHclTerraform(this._enableTenantAwareDataMining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      blocklist_entries: {
        value: davisCopilotBlocklistEntriesToHclTerraform(this._blocklistEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DavisCopilotBlocklistEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
