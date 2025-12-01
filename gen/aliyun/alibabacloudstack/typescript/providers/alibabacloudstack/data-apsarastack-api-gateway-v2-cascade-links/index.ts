// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_cascade_links
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApsarastackApiGatewayV2CascadeLinksConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_cascade_links#cascade_instance_name DataApsarastackApiGatewayV2CascadeLinks#cascade_instance_name}
  */
  readonly cascadeInstanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_cascade_links#id DataApsarastackApiGatewayV2CascadeLinks#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_cascade_links#ids DataApsarastackApiGatewayV2CascadeLinks#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_cascade_links#name_regex DataApsarastackApiGatewayV2CascadeLinks#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_cascade_links#source_instance_name DataApsarastackApiGatewayV2CascadeLinks#source_instance_name}
  */
  readonly sourceInstanceName?: string;
}
export interface DataApsarastackApiGatewayV2CascadeLinksLinks {
}

export function dataApsarastackApiGatewayV2CascadeLinksLinksToTerraform(struct?: DataApsarastackApiGatewayV2CascadeLinksLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApsarastackApiGatewayV2CascadeLinksLinksToHclTerraform(struct?: DataApsarastackApiGatewayV2CascadeLinksLinks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApsarastackApiGatewayV2CascadeLinksLinksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataApsarastackApiGatewayV2CascadeLinksLinks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApsarastackApiGatewayV2CascadeLinksLinks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cascade_instance_id - computed: true, optional: false, required: false
  public get cascadeInstanceId() {
    return this.getStringAttribute('cascade_instance_id');
  }

  // cascade_instance_name - computed: true, optional: false, required: false
  public get cascadeInstanceName() {
    return this.getStringAttribute('cascade_instance_name');
  }

  // cascade_service_id - computed: true, optional: false, required: false
  public get cascadeServiceId() {
    return this.getStringAttribute('cascade_service_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // link_id - computed: true, optional: false, required: false
  public get linkId() {
    return this.getStringAttribute('link_id');
  }

  // link_name - computed: true, optional: false, required: false
  public get linkName() {
    return this.getStringAttribute('link_name');
  }

  // source_instance_address - computed: true, optional: false, required: false
  public get sourceInstanceAddress() {
    return this.getStringAttribute('source_instance_address');
  }

  // source_instance_id - computed: true, optional: false, required: false
  public get sourceInstanceId() {
    return this.getStringAttribute('source_instance_id');
  }

  // source_instance_name - computed: true, optional: false, required: false
  public get sourceInstanceName() {
    return this.getStringAttribute('source_instance_name');
  }
}

export class DataApsarastackApiGatewayV2CascadeLinksLinksList extends cdktf.ComplexList {

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
  public get(index: number): DataApsarastackApiGatewayV2CascadeLinksLinksOutputReference {
    return new DataApsarastackApiGatewayV2CascadeLinksLinksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_cascade_links apsarastack_api_gateway_v2_cascade_links}
*/
export class DataApsarastackApiGatewayV2CascadeLinks extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_api_gateway_v2_cascade_links";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApsarastackApiGatewayV2CascadeLinks resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApsarastackApiGatewayV2CascadeLinks to import
  * @param importFromId The id of the existing DataApsarastackApiGatewayV2CascadeLinks that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_cascade_links#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApsarastackApiGatewayV2CascadeLinks to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_api_gateway_v2_cascade_links", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/apsarastack_api_gateway_v2_cascade_links apsarastack_api_gateway_v2_cascade_links} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApsarastackApiGatewayV2CascadeLinksConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataApsarastackApiGatewayV2CascadeLinksConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_api_gateway_v2_cascade_links',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cascadeInstanceName = config.cascadeInstanceName;
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._sourceInstanceName = config.sourceInstanceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cascade_instance_name - computed: false, optional: true, required: false
  private _cascadeInstanceName?: string; 
  public get cascadeInstanceName() {
    return this.getStringAttribute('cascade_instance_name');
  }
  public set cascadeInstanceName(value: string) {
    this._cascadeInstanceName = value;
  }
  public resetCascadeInstanceName() {
    this._cascadeInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cascadeInstanceNameInput() {
    return this._cascadeInstanceName;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // links - computed: true, optional: false, required: false
  private _links = new DataApsarastackApiGatewayV2CascadeLinksLinksList(this, "links", false);
  public get links() {
    return this._links;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // source_instance_name - computed: false, optional: true, required: false
  private _sourceInstanceName?: string; 
  public get sourceInstanceName() {
    return this.getStringAttribute('source_instance_name');
  }
  public set sourceInstanceName(value: string) {
    this._sourceInstanceName = value;
  }
  public resetSourceInstanceName() {
    this._sourceInstanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInstanceNameInput() {
    return this._sourceInstanceName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cascade_instance_name: cdktf.stringToTerraform(this._cascadeInstanceName),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      source_instance_name: cdktf.stringToTerraform(this._sourceInstanceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cascade_instance_name: {
        value: cdktf.stringToHclTerraform(this._cascadeInstanceName),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_instance_name: {
        value: cdktf.stringToHclTerraform(this._sourceInstanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
