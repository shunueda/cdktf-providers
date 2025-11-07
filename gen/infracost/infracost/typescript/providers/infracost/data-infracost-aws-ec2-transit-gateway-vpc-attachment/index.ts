// https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_ec2_transit_gateway_vpc_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataInfracostAwsEc2TransitGatewayVpcAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_ec2_transit_gateway_vpc_attachment#id DataInfracostAwsEc2TransitGatewayVpcAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_ec2_transit_gateway_vpc_attachment#resources DataInfracostAwsEc2TransitGatewayVpcAttachment#resources}
  */
  readonly resources: string[];
  /**
  * monthly_gb_data_processed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_ec2_transit_gateway_vpc_attachment#monthly_gb_data_processed DataInfracostAwsEc2TransitGatewayVpcAttachment#monthly_gb_data_processed}
  */
  readonly monthlyGbDataProcessed?: DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessed;
}
export interface DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessed {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_ec2_transit_gateway_vpc_attachment#value DataInfracostAwsEc2TransitGatewayVpcAttachment#value}
  */
  readonly value?: number;
}

export function dataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessedToTerraform(struct?: DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessedOutputReference | DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessedToHclTerraform(struct?: DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessedOutputReference | DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_ec2_transit_gateway_vpc_attachment infracost_aws_ec2_transit_gateway_vpc_attachment}
*/
export class DataInfracostAwsEc2TransitGatewayVpcAttachment extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infracost_aws_ec2_transit_gateway_vpc_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataInfracostAwsEc2TransitGatewayVpcAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataInfracostAwsEc2TransitGatewayVpcAttachment to import
  * @param importFromId The id of the existing DataInfracostAwsEc2TransitGatewayVpcAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_ec2_transit_gateway_vpc_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataInfracostAwsEc2TransitGatewayVpcAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infracost_aws_ec2_transit_gateway_vpc_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infracost/infracost/0.0.9/docs/data-sources/aws_ec2_transit_gateway_vpc_attachment infracost_aws_ec2_transit_gateway_vpc_attachment} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataInfracostAwsEc2TransitGatewayVpcAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: DataInfracostAwsEc2TransitGatewayVpcAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'infracost_aws_ec2_transit_gateway_vpc_attachment',
      terraformGeneratorMetadata: {
        providerName: 'infracost',
        providerVersion: '0.0.9'
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
    this._resources = config.resources;
    this._monthlyGbDataProcessed.internalValue = config.monthlyGbDataProcessed;
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

  // resources - computed: false, optional: false, required: true
  private _resources?: string[]; 
  public get resources() {
    return cdktf.Fn.tolist(this.getListAttribute('resources'));
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // monthly_gb_data_processed - computed: false, optional: true, required: false
  private _monthlyGbDataProcessed = new DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessedOutputReference(this, "monthly_gb_data_processed");
  public get monthlyGbDataProcessed() {
    return this._monthlyGbDataProcessed;
  }
  public putMonthlyGbDataProcessed(value: DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessed) {
    this._monthlyGbDataProcessed.internalValue = value;
  }
  public resetMonthlyGbDataProcessed() {
    this._monthlyGbDataProcessed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyGbDataProcessedInput() {
    return this._monthlyGbDataProcessed.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resources),
      monthly_gb_data_processed: dataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessedToTerraform(this._monthlyGbDataProcessed.internalValue),
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
      resources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._resources),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      monthly_gb_data_processed: {
        value: dataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessedToHclTerraform(this._monthlyGbDataProcessed.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataInfracostAwsEc2TransitGatewayVpcAttachmentMonthlyGbDataProcessedList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
