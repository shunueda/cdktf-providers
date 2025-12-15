// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicesRpmProbeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Offload real-time performance monitoring probes to MS-MIC/MS-MPC card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#delegate_probes ServicesRpmProbe#delegate_probes}
  */
  readonly delegateProbes?: boolean | cdktf.IResolvable;
  /**
  * Name of owner.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#name ServicesRpmProbe#name}
  */
  readonly name: string;
  /**
  * test block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#test ServicesRpmProbe#test}
  */
  readonly test?: ServicesRpmProbeTest[] | cdktf.IResolvable;
}
export interface ServicesRpmProbeTestRpmScale {
  /**
  * Base destination interface for scale test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#destination_interface ServicesRpmProbe#destination_interface}
  */
  readonly destinationInterface?: string;
  /**
  * Subunit count for destination interface for scale test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#destination_subunit_cnt ServicesRpmProbe#destination_subunit_cnt}
  */
  readonly destinationSubunitCnt?: number;
  /**
  * Source base address of host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#source_address_base ServicesRpmProbe#source_address_base}
  */
  readonly sourceAddressBase?: string;
  /**
  * Source-address count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#source_count ServicesRpmProbe#source_count}
  */
  readonly sourceCount?: number;
  /**
  * Source base inet6 address of host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#source_inet6_address_base ServicesRpmProbe#source_inet6_address_base}
  */
  readonly sourceInet6AddressBase?: string;
  /**
  * Source-inet6-address count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#source_inet6_count ServicesRpmProbe#source_inet6_count}
  */
  readonly sourceInet6Count?: number;
  /**
  * Steps to increment src inet6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#source_inet6_step ServicesRpmProbe#source_inet6_step}
  */
  readonly sourceInet6Step?: string;
  /**
  * Steps to increment src address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#source_step ServicesRpmProbe#source_step}
  */
  readonly sourceStep?: string;
  /**
  * Base address of target host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#target_address_base ServicesRpmProbe#target_address_base}
  */
  readonly targetAddressBase?: string;
  /**
  * Target address count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#target_count ServicesRpmProbe#target_count}
  */
  readonly targetCount?: number;
  /**
  * Base inet6 address of target host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#target_inet6_address_base ServicesRpmProbe#target_inet6_address_base}
  */
  readonly targetInet6AddressBase?: string;
  /**
  * Target inet6 address count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#target_inet6_count ServicesRpmProbe#target_inet6_count}
  */
  readonly targetInet6Count?: number;
  /**
  * Steps to increment target inet6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#target_inet6_step ServicesRpmProbe#target_inet6_step}
  */
  readonly targetInet6Step?: string;
  /**
  * Steps to increment target address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#target_step ServicesRpmProbe#target_step}
  */
  readonly targetStep?: string;
  /**
  * Number of probe-tests generated using scale config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#tests_count ServicesRpmProbe#tests_count}
  */
  readonly testsCount?: number;
}

export function servicesRpmProbeTestRpmScaleToTerraform(struct?: ServicesRpmProbeTestRpmScale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_interface: cdktf.stringToTerraform(struct!.destinationInterface),
    destination_subunit_cnt: cdktf.numberToTerraform(struct!.destinationSubunitCnt),
    source_address_base: cdktf.stringToTerraform(struct!.sourceAddressBase),
    source_count: cdktf.numberToTerraform(struct!.sourceCount),
    source_inet6_address_base: cdktf.stringToTerraform(struct!.sourceInet6AddressBase),
    source_inet6_count: cdktf.numberToTerraform(struct!.sourceInet6Count),
    source_inet6_step: cdktf.stringToTerraform(struct!.sourceInet6Step),
    source_step: cdktf.stringToTerraform(struct!.sourceStep),
    target_address_base: cdktf.stringToTerraform(struct!.targetAddressBase),
    target_count: cdktf.numberToTerraform(struct!.targetCount),
    target_inet6_address_base: cdktf.stringToTerraform(struct!.targetInet6AddressBase),
    target_inet6_count: cdktf.numberToTerraform(struct!.targetInet6Count),
    target_inet6_step: cdktf.stringToTerraform(struct!.targetInet6Step),
    target_step: cdktf.stringToTerraform(struct!.targetStep),
    tests_count: cdktf.numberToTerraform(struct!.testsCount),
  }
}


export function servicesRpmProbeTestRpmScaleToHclTerraform(struct?: ServicesRpmProbeTestRpmScale | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination_interface: {
      value: cdktf.stringToHclTerraform(struct!.destinationInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_subunit_cnt: {
      value: cdktf.numberToHclTerraform(struct!.destinationSubunitCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_address_base: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_count: {
      value: cdktf.numberToHclTerraform(struct!.sourceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_inet6_address_base: {
      value: cdktf.stringToHclTerraform(struct!.sourceInet6AddressBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_inet6_count: {
      value: cdktf.numberToHclTerraform(struct!.sourceInet6Count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_inet6_step: {
      value: cdktf.stringToHclTerraform(struct!.sourceInet6Step),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_step: {
      value: cdktf.stringToHclTerraform(struct!.sourceStep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_address_base: {
      value: cdktf.stringToHclTerraform(struct!.targetAddressBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_count: {
      value: cdktf.numberToHclTerraform(struct!.targetCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_inet6_address_base: {
      value: cdktf.stringToHclTerraform(struct!.targetInet6AddressBase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_inet6_count: {
      value: cdktf.numberToHclTerraform(struct!.targetInet6Count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    target_inet6_step: {
      value: cdktf.stringToHclTerraform(struct!.targetInet6Step),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_step: {
      value: cdktf.stringToHclTerraform(struct!.targetStep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tests_count: {
      value: cdktf.numberToHclTerraform(struct!.testsCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesRpmProbeTestRpmScaleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesRpmProbeTestRpmScale | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationInterface = this._destinationInterface;
    }
    if (this._destinationSubunitCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationSubunitCnt = this._destinationSubunitCnt;
    }
    if (this._sourceAddressBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressBase = this._sourceAddressBase;
    }
    if (this._sourceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCount = this._sourceCount;
    }
    if (this._sourceInet6AddressBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInet6AddressBase = this._sourceInet6AddressBase;
    }
    if (this._sourceInet6Count !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInet6Count = this._sourceInet6Count;
    }
    if (this._sourceInet6Step !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceInet6Step = this._sourceInet6Step;
    }
    if (this._sourceStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceStep = this._sourceStep;
    }
    if (this._targetAddressBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetAddressBase = this._targetAddressBase;
    }
    if (this._targetCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCount = this._targetCount;
    }
    if (this._targetInet6AddressBase !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInet6AddressBase = this._targetInet6AddressBase;
    }
    if (this._targetInet6Count !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInet6Count = this._targetInet6Count;
    }
    if (this._targetInet6Step !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetInet6Step = this._targetInet6Step;
    }
    if (this._targetStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetStep = this._targetStep;
    }
    if (this._testsCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.testsCount = this._testsCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesRpmProbeTestRpmScale | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destinationInterface = undefined;
      this._destinationSubunitCnt = undefined;
      this._sourceAddressBase = undefined;
      this._sourceCount = undefined;
      this._sourceInet6AddressBase = undefined;
      this._sourceInet6Count = undefined;
      this._sourceInet6Step = undefined;
      this._sourceStep = undefined;
      this._targetAddressBase = undefined;
      this._targetCount = undefined;
      this._targetInet6AddressBase = undefined;
      this._targetInet6Count = undefined;
      this._targetInet6Step = undefined;
      this._targetStep = undefined;
      this._testsCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destinationInterface = value.destinationInterface;
      this._destinationSubunitCnt = value.destinationSubunitCnt;
      this._sourceAddressBase = value.sourceAddressBase;
      this._sourceCount = value.sourceCount;
      this._sourceInet6AddressBase = value.sourceInet6AddressBase;
      this._sourceInet6Count = value.sourceInet6Count;
      this._sourceInet6Step = value.sourceInet6Step;
      this._sourceStep = value.sourceStep;
      this._targetAddressBase = value.targetAddressBase;
      this._targetCount = value.targetCount;
      this._targetInet6AddressBase = value.targetInet6AddressBase;
      this._targetInet6Count = value.targetInet6Count;
      this._targetInet6Step = value.targetInet6Step;
      this._targetStep = value.targetStep;
      this._testsCount = value.testsCount;
    }
  }

  // destination_interface - computed: false, optional: true, required: false
  private _destinationInterface?: string; 
  public get destinationInterface() {
    return this.getStringAttribute('destination_interface');
  }
  public set destinationInterface(value: string) {
    this._destinationInterface = value;
  }
  public resetDestinationInterface() {
    this._destinationInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInterfaceInput() {
    return this._destinationInterface;
  }

  // destination_subunit_cnt - computed: false, optional: true, required: false
  private _destinationSubunitCnt?: number; 
  public get destinationSubunitCnt() {
    return this.getNumberAttribute('destination_subunit_cnt');
  }
  public set destinationSubunitCnt(value: number) {
    this._destinationSubunitCnt = value;
  }
  public resetDestinationSubunitCnt() {
    this._destinationSubunitCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationSubunitCntInput() {
    return this._destinationSubunitCnt;
  }

  // source_address_base - computed: false, optional: true, required: false
  private _sourceAddressBase?: string; 
  public get sourceAddressBase() {
    return this.getStringAttribute('source_address_base');
  }
  public set sourceAddressBase(value: string) {
    this._sourceAddressBase = value;
  }
  public resetSourceAddressBase() {
    this._sourceAddressBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressBaseInput() {
    return this._sourceAddressBase;
  }

  // source_count - computed: false, optional: true, required: false
  private _sourceCount?: number; 
  public get sourceCount() {
    return this.getNumberAttribute('source_count');
  }
  public set sourceCount(value: number) {
    this._sourceCount = value;
  }
  public resetSourceCount() {
    this._sourceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCountInput() {
    return this._sourceCount;
  }

  // source_inet6_address_base - computed: false, optional: true, required: false
  private _sourceInet6AddressBase?: string; 
  public get sourceInet6AddressBase() {
    return this.getStringAttribute('source_inet6_address_base');
  }
  public set sourceInet6AddressBase(value: string) {
    this._sourceInet6AddressBase = value;
  }
  public resetSourceInet6AddressBase() {
    this._sourceInet6AddressBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInet6AddressBaseInput() {
    return this._sourceInet6AddressBase;
  }

  // source_inet6_count - computed: false, optional: true, required: false
  private _sourceInet6Count?: number; 
  public get sourceInet6Count() {
    return this.getNumberAttribute('source_inet6_count');
  }
  public set sourceInet6Count(value: number) {
    this._sourceInet6Count = value;
  }
  public resetSourceInet6Count() {
    this._sourceInet6Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInet6CountInput() {
    return this._sourceInet6Count;
  }

  // source_inet6_step - computed: false, optional: true, required: false
  private _sourceInet6Step?: string; 
  public get sourceInet6Step() {
    return this.getStringAttribute('source_inet6_step');
  }
  public set sourceInet6Step(value: string) {
    this._sourceInet6Step = value;
  }
  public resetSourceInet6Step() {
    this._sourceInet6Step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInet6StepInput() {
    return this._sourceInet6Step;
  }

  // source_step - computed: false, optional: true, required: false
  private _sourceStep?: string; 
  public get sourceStep() {
    return this.getStringAttribute('source_step');
  }
  public set sourceStep(value: string) {
    this._sourceStep = value;
  }
  public resetSourceStep() {
    this._sourceStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceStepInput() {
    return this._sourceStep;
  }

  // target_address_base - computed: false, optional: true, required: false
  private _targetAddressBase?: string; 
  public get targetAddressBase() {
    return this.getStringAttribute('target_address_base');
  }
  public set targetAddressBase(value: string) {
    this._targetAddressBase = value;
  }
  public resetTargetAddressBase() {
    this._targetAddressBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetAddressBaseInput() {
    return this._targetAddressBase;
  }

  // target_count - computed: false, optional: true, required: false
  private _targetCount?: number; 
  public get targetCount() {
    return this.getNumberAttribute('target_count');
  }
  public set targetCount(value: number) {
    this._targetCount = value;
  }
  public resetTargetCount() {
    this._targetCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCountInput() {
    return this._targetCount;
  }

  // target_inet6_address_base - computed: false, optional: true, required: false
  private _targetInet6AddressBase?: string; 
  public get targetInet6AddressBase() {
    return this.getStringAttribute('target_inet6_address_base');
  }
  public set targetInet6AddressBase(value: string) {
    this._targetInet6AddressBase = value;
  }
  public resetTargetInet6AddressBase() {
    this._targetInet6AddressBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInet6AddressBaseInput() {
    return this._targetInet6AddressBase;
  }

  // target_inet6_count - computed: false, optional: true, required: false
  private _targetInet6Count?: number; 
  public get targetInet6Count() {
    return this.getNumberAttribute('target_inet6_count');
  }
  public set targetInet6Count(value: number) {
    this._targetInet6Count = value;
  }
  public resetTargetInet6Count() {
    this._targetInet6Count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInet6CountInput() {
    return this._targetInet6Count;
  }

  // target_inet6_step - computed: false, optional: true, required: false
  private _targetInet6Step?: string; 
  public get targetInet6Step() {
    return this.getStringAttribute('target_inet6_step');
  }
  public set targetInet6Step(value: string) {
    this._targetInet6Step = value;
  }
  public resetTargetInet6Step() {
    this._targetInet6Step = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInet6StepInput() {
    return this._targetInet6Step;
  }

  // target_step - computed: false, optional: true, required: false
  private _targetStep?: string; 
  public get targetStep() {
    return this.getStringAttribute('target_step');
  }
  public set targetStep(value: string) {
    this._targetStep = value;
  }
  public resetTargetStep() {
    this._targetStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetStepInput() {
    return this._targetStep;
  }

  // tests_count - computed: false, optional: true, required: false
  private _testsCount?: number; 
  public get testsCount() {
    return this.getNumberAttribute('tests_count');
  }
  public set testsCount(value: number) {
    this._testsCount = value;
  }
  public resetTestsCount() {
    this._testsCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testsCountInput() {
    return this._testsCount;
  }
}
export interface ServicesRpmProbeTestThresholds {
  /**
  * Maximum source to destination time per probe (microseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#egress_time ServicesRpmProbe#egress_time}
  */
  readonly egressTime?: number;
  /**
  * Maximum destination to source time per probe (microseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#ingress_time ServicesRpmProbe#ingress_time}
  */
  readonly ingressTime?: number;
  /**
  * Maximum source to destination jitter per test (microseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#jitter_egress ServicesRpmProbe#jitter_egress}
  */
  readonly jitterEgress?: number;
  /**
  * Maximum destination to source jitter per test (microseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#jitter_ingress ServicesRpmProbe#jitter_ingress}
  */
  readonly jitterIngress?: number;
  /**
  * Maximum jitter per test (microseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#jitter_rtt ServicesRpmProbe#jitter_rtt}
  */
  readonly jitterRtt?: number;
  /**
  * Maximum round trip time per probe (microseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#rtt ServicesRpmProbe#rtt}
  */
  readonly rtt?: number;
  /**
  * Maximum source to destination standard deviation per test (microseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#std_dev_egress ServicesRpmProbe#std_dev_egress}
  */
  readonly stdDevEgress?: number;
  /**
  * Maximum destination to source standard deviation per test (microseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#std_dev_ingress ServicesRpmProbe#std_dev_ingress}
  */
  readonly stdDevIngress?: number;
  /**
  * Maximum standard deviation per test (microseconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#std_dev_rtt ServicesRpmProbe#std_dev_rtt}
  */
  readonly stdDevRtt?: number;
  /**
  * Successive probe loss count indicating probe failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#successive_loss ServicesRpmProbe#successive_loss}
  */
  readonly successiveLoss?: number;
  /**
  * Total probe loss count indicating test failure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#total_loss ServicesRpmProbe#total_loss}
  */
  readonly totalLoss?: number;
}

export function servicesRpmProbeTestThresholdsToTerraform(struct?: ServicesRpmProbeTestThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    egress_time: cdktf.numberToTerraform(struct!.egressTime),
    ingress_time: cdktf.numberToTerraform(struct!.ingressTime),
    jitter_egress: cdktf.numberToTerraform(struct!.jitterEgress),
    jitter_ingress: cdktf.numberToTerraform(struct!.jitterIngress),
    jitter_rtt: cdktf.numberToTerraform(struct!.jitterRtt),
    rtt: cdktf.numberToTerraform(struct!.rtt),
    std_dev_egress: cdktf.numberToTerraform(struct!.stdDevEgress),
    std_dev_ingress: cdktf.numberToTerraform(struct!.stdDevIngress),
    std_dev_rtt: cdktf.numberToTerraform(struct!.stdDevRtt),
    successive_loss: cdktf.numberToTerraform(struct!.successiveLoss),
    total_loss: cdktf.numberToTerraform(struct!.totalLoss),
  }
}


export function servicesRpmProbeTestThresholdsToHclTerraform(struct?: ServicesRpmProbeTestThresholds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    egress_time: {
      value: cdktf.numberToHclTerraform(struct!.egressTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_time: {
      value: cdktf.numberToHclTerraform(struct!.ingressTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_egress: {
      value: cdktf.numberToHclTerraform(struct!.jitterEgress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_ingress: {
      value: cdktf.numberToHclTerraform(struct!.jitterIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jitter_rtt: {
      value: cdktf.numberToHclTerraform(struct!.jitterRtt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt: {
      value: cdktf.numberToHclTerraform(struct!.rtt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    std_dev_egress: {
      value: cdktf.numberToHclTerraform(struct!.stdDevEgress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    std_dev_ingress: {
      value: cdktf.numberToHclTerraform(struct!.stdDevIngress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    std_dev_rtt: {
      value: cdktf.numberToHclTerraform(struct!.stdDevRtt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    successive_loss: {
      value: cdktf.numberToHclTerraform(struct!.successiveLoss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_loss: {
      value: cdktf.numberToHclTerraform(struct!.totalLoss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesRpmProbeTestThresholdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesRpmProbeTestThresholds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._egressTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressTime = this._egressTime;
    }
    if (this._ingressTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressTime = this._ingressTime;
    }
    if (this._jitterEgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterEgress = this._jitterEgress;
    }
    if (this._jitterIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterIngress = this._jitterIngress;
    }
    if (this._jitterRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitterRtt = this._jitterRtt;
    }
    if (this._rtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtt = this._rtt;
    }
    if (this._stdDevEgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdDevEgress = this._stdDevEgress;
    }
    if (this._stdDevIngress !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdDevIngress = this._stdDevIngress;
    }
    if (this._stdDevRtt !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdDevRtt = this._stdDevRtt;
    }
    if (this._successiveLoss !== undefined) {
      hasAnyValues = true;
      internalValueResult.successiveLoss = this._successiveLoss;
    }
    if (this._totalLoss !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLoss = this._totalLoss;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesRpmProbeTestThresholds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._egressTime = undefined;
      this._ingressTime = undefined;
      this._jitterEgress = undefined;
      this._jitterIngress = undefined;
      this._jitterRtt = undefined;
      this._rtt = undefined;
      this._stdDevEgress = undefined;
      this._stdDevIngress = undefined;
      this._stdDevRtt = undefined;
      this._successiveLoss = undefined;
      this._totalLoss = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._egressTime = value.egressTime;
      this._ingressTime = value.ingressTime;
      this._jitterEgress = value.jitterEgress;
      this._jitterIngress = value.jitterIngress;
      this._jitterRtt = value.jitterRtt;
      this._rtt = value.rtt;
      this._stdDevEgress = value.stdDevEgress;
      this._stdDevIngress = value.stdDevIngress;
      this._stdDevRtt = value.stdDevRtt;
      this._successiveLoss = value.successiveLoss;
      this._totalLoss = value.totalLoss;
    }
  }

  // egress_time - computed: false, optional: true, required: false
  private _egressTime?: number; 
  public get egressTime() {
    return this.getNumberAttribute('egress_time');
  }
  public set egressTime(value: number) {
    this._egressTime = value;
  }
  public resetEgressTime() {
    this._egressTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressTimeInput() {
    return this._egressTime;
  }

  // ingress_time - computed: false, optional: true, required: false
  private _ingressTime?: number; 
  public get ingressTime() {
    return this.getNumberAttribute('ingress_time');
  }
  public set ingressTime(value: number) {
    this._ingressTime = value;
  }
  public resetIngressTime() {
    this._ingressTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressTimeInput() {
    return this._ingressTime;
  }

  // jitter_egress - computed: false, optional: true, required: false
  private _jitterEgress?: number; 
  public get jitterEgress() {
    return this.getNumberAttribute('jitter_egress');
  }
  public set jitterEgress(value: number) {
    this._jitterEgress = value;
  }
  public resetJitterEgress() {
    this._jitterEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterEgressInput() {
    return this._jitterEgress;
  }

  // jitter_ingress - computed: false, optional: true, required: false
  private _jitterIngress?: number; 
  public get jitterIngress() {
    return this.getNumberAttribute('jitter_ingress');
  }
  public set jitterIngress(value: number) {
    this._jitterIngress = value;
  }
  public resetJitterIngress() {
    this._jitterIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterIngressInput() {
    return this._jitterIngress;
  }

  // jitter_rtt - computed: false, optional: true, required: false
  private _jitterRtt?: number; 
  public get jitterRtt() {
    return this.getNumberAttribute('jitter_rtt');
  }
  public set jitterRtt(value: number) {
    this._jitterRtt = value;
  }
  public resetJitterRtt() {
    this._jitterRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitterRttInput() {
    return this._jitterRtt;
  }

  // rtt - computed: false, optional: true, required: false
  private _rtt?: number; 
  public get rtt() {
    return this.getNumberAttribute('rtt');
  }
  public set rtt(value: number) {
    this._rtt = value;
  }
  public resetRtt() {
    this._rtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttInput() {
    return this._rtt;
  }

  // std_dev_egress - computed: false, optional: true, required: false
  private _stdDevEgress?: number; 
  public get stdDevEgress() {
    return this.getNumberAttribute('std_dev_egress');
  }
  public set stdDevEgress(value: number) {
    this._stdDevEgress = value;
  }
  public resetStdDevEgress() {
    this._stdDevEgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdDevEgressInput() {
    return this._stdDevEgress;
  }

  // std_dev_ingress - computed: false, optional: true, required: false
  private _stdDevIngress?: number; 
  public get stdDevIngress() {
    return this.getNumberAttribute('std_dev_ingress');
  }
  public set stdDevIngress(value: number) {
    this._stdDevIngress = value;
  }
  public resetStdDevIngress() {
    this._stdDevIngress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdDevIngressInput() {
    return this._stdDevIngress;
  }

  // std_dev_rtt - computed: false, optional: true, required: false
  private _stdDevRtt?: number; 
  public get stdDevRtt() {
    return this.getNumberAttribute('std_dev_rtt');
  }
  public set stdDevRtt(value: number) {
    this._stdDevRtt = value;
  }
  public resetStdDevRtt() {
    this._stdDevRtt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdDevRttInput() {
    return this._stdDevRtt;
  }

  // successive_loss - computed: false, optional: true, required: false
  private _successiveLoss?: number; 
  public get successiveLoss() {
    return this.getNumberAttribute('successive_loss');
  }
  public set successiveLoss(value: number) {
    this._successiveLoss = value;
  }
  public resetSuccessiveLoss() {
    this._successiveLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successiveLossInput() {
    return this._successiveLoss;
  }

  // total_loss - computed: false, optional: true, required: false
  private _totalLoss?: number; 
  public get totalLoss() {
    return this.getNumberAttribute('total_loss');
  }
  public set totalLoss(value: number) {
    this._totalLoss = value;
  }
  public resetTotalLoss() {
    this._totalLoss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLossInput() {
    return this._totalLoss;
  }
}
export interface ServicesRpmProbeTest {
  /**
  * Define contents of the data portion of the probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#data_fill ServicesRpmProbe#data_fill}
  */
  readonly dataFill?: string;
  /**
  * Size of the data portion of the probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#data_size ServicesRpmProbe#data_size}
  */
  readonly dataSize?: number;
  /**
  * Name of output interface for probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#destination_interface ServicesRpmProbe#destination_interface}
  */
  readonly destinationInterface?: string;
  /**
  * TCP/UDP port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#destination_port ServicesRpmProbe#destination_port}
  */
  readonly destinationPort?: number;
  /**
  * Differentiated Services code point bits or alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#dscp_code_points ServicesRpmProbe#dscp_code_points}
  */
  readonly dscpCodePoints?: string;
  /**
  * Packet Forwarding Engine updates timestamps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#hardware_timestamp ServicesRpmProbe#hardware_timestamp}
  */
  readonly hardwareTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Number of stored history entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#history_size ServicesRpmProbe#history_size}
  */
  readonly historySize?: number;
  /**
  * Inet6 Source Address of the probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#inet6_source_address ServicesRpmProbe#inet6_source_address}
  */
  readonly inet6SourceAddress?: string;
  /**
  * Number of samples used for moving average.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#moving_average_size ServicesRpmProbe#moving_average_size}
  */
  readonly movingAverageSize?: number;
  /**
  * Name of test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#name ServicesRpmProbe#name}
  */
  readonly name: string;
  /**
  * Enable hardware timestamps for one-way measurements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#one_way_hardware_timestamp ServicesRpmProbe#one_way_hardware_timestamp}
  */
  readonly oneWayHardwareTimestamp?: boolean | cdktf.IResolvable;
  /**
  * Total number of probes per test.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#probe_count ServicesRpmProbe#probe_count}
  */
  readonly probeCount?: number;
  /**
  * Delay between probes (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#probe_interval ServicesRpmProbe#probe_interval}
  */
  readonly probeInterval?: number;
  /**
  * Probe request type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#probe_type ServicesRpmProbe#probe_type}
  */
  readonly probeType?: string;
  /**
  * Routing instance used by probes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#routing_instance ServicesRpmProbe#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Source address for probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#source_address ServicesRpmProbe#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Type of target destination for probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#target_type ServicesRpmProbe#target_type}
  */
  readonly targetType?: string;
  /**
  * Target destination for probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#target_value ServicesRpmProbe#target_value}
  */
  readonly targetValue?: string;
  /**
  * Delay between tests (seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#test_interval ServicesRpmProbe#test_interval}
  */
  readonly testInterval?: number;
  /**
  * Trap to send if threshold is met or exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#traps ServicesRpmProbe#traps}
  */
  readonly traps?: string[];
  /**
  * Time to Live (hop-limit) value for an RPM IPv4(IPv6) packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#ttl ServicesRpmProbe#ttl}
  */
  readonly ttl?: number;
  /**
  * rpm_scale block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#rpm_scale ServicesRpmProbe#rpm_scale}
  */
  readonly rpmScale?: ServicesRpmProbeTestRpmScale;
  /**
  * thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#thresholds ServicesRpmProbe#thresholds}
  */
  readonly thresholds?: ServicesRpmProbeTestThresholds;
}

export function servicesRpmProbeTestToTerraform(struct?: ServicesRpmProbeTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_fill: cdktf.stringToTerraform(struct!.dataFill),
    data_size: cdktf.numberToTerraform(struct!.dataSize),
    destination_interface: cdktf.stringToTerraform(struct!.destinationInterface),
    destination_port: cdktf.numberToTerraform(struct!.destinationPort),
    dscp_code_points: cdktf.stringToTerraform(struct!.dscpCodePoints),
    hardware_timestamp: cdktf.booleanToTerraform(struct!.hardwareTimestamp),
    history_size: cdktf.numberToTerraform(struct!.historySize),
    inet6_source_address: cdktf.stringToTerraform(struct!.inet6SourceAddress),
    moving_average_size: cdktf.numberToTerraform(struct!.movingAverageSize),
    name: cdktf.stringToTerraform(struct!.name),
    one_way_hardware_timestamp: cdktf.booleanToTerraform(struct!.oneWayHardwareTimestamp),
    probe_count: cdktf.numberToTerraform(struct!.probeCount),
    probe_interval: cdktf.numberToTerraform(struct!.probeInterval),
    probe_type: cdktf.stringToTerraform(struct!.probeType),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    target_type: cdktf.stringToTerraform(struct!.targetType),
    target_value: cdktf.stringToTerraform(struct!.targetValue),
    test_interval: cdktf.numberToTerraform(struct!.testInterval),
    traps: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.traps),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    rpm_scale: servicesRpmProbeTestRpmScaleToTerraform(struct!.rpmScale),
    thresholds: servicesRpmProbeTestThresholdsToTerraform(struct!.thresholds),
  }
}


export function servicesRpmProbeTestToHclTerraform(struct?: ServicesRpmProbeTest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_fill: {
      value: cdktf.stringToHclTerraform(struct!.dataFill),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_size: {
      value: cdktf.numberToHclTerraform(struct!.dataSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    destination_interface: {
      value: cdktf.stringToHclTerraform(struct!.destinationInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination_port: {
      value: cdktf.numberToHclTerraform(struct!.destinationPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp_code_points: {
      value: cdktf.stringToHclTerraform(struct!.dscpCodePoints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hardware_timestamp: {
      value: cdktf.booleanToHclTerraform(struct!.hardwareTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    history_size: {
      value: cdktf.numberToHclTerraform(struct!.historySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inet6_source_address: {
      value: cdktf.stringToHclTerraform(struct!.inet6SourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    moving_average_size: {
      value: cdktf.numberToHclTerraform(struct!.movingAverageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    one_way_hardware_timestamp: {
      value: cdktf.booleanToHclTerraform(struct!.oneWayHardwareTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    probe_count: {
      value: cdktf.numberToHclTerraform(struct!.probeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_interval: {
      value: cdktf.numberToHclTerraform(struct!.probeInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    probe_type: {
      value: cdktf.stringToHclTerraform(struct!.probeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_type: {
      value: cdktf.stringToHclTerraform(struct!.targetType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_value: {
      value: cdktf.stringToHclTerraform(struct!.targetValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    test_interval: {
      value: cdktf.numberToHclTerraform(struct!.testInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    traps: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.traps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpm_scale: {
      value: servicesRpmProbeTestRpmScaleToHclTerraform(struct!.rpmScale),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesRpmProbeTestRpmScale",
    },
    thresholds: {
      value: servicesRpmProbeTestThresholdsToHclTerraform(struct!.thresholds),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesRpmProbeTestThresholds",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesRpmProbeTestOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicesRpmProbeTest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFill !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFill = this._dataFill;
    }
    if (this._dataSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSize = this._dataSize;
    }
    if (this._destinationInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationInterface = this._destinationInterface;
    }
    if (this._destinationPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPort = this._destinationPort;
    }
    if (this._dscpCodePoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscpCodePoints = this._dscpCodePoints;
    }
    if (this._hardwareTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.hardwareTimestamp = this._hardwareTimestamp;
    }
    if (this._historySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.historySize = this._historySize;
    }
    if (this._inet6SourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.inet6SourceAddress = this._inet6SourceAddress;
    }
    if (this._movingAverageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.movingAverageSize = this._movingAverageSize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._oneWayHardwareTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneWayHardwareTimestamp = this._oneWayHardwareTimestamp;
    }
    if (this._probeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeCount = this._probeCount;
    }
    if (this._probeInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeInterval = this._probeInterval;
    }
    if (this._probeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeType = this._probeType;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._targetType !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetType = this._targetType;
    }
    if (this._targetValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetValue = this._targetValue;
    }
    if (this._testInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.testInterval = this._testInterval;
    }
    if (this._traps !== undefined) {
      hasAnyValues = true;
      internalValueResult.traps = this._traps;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._rpmScale?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpmScale = this._rpmScale?.internalValue;
    }
    if (this._thresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholds = this._thresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesRpmProbeTest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataFill = undefined;
      this._dataSize = undefined;
      this._destinationInterface = undefined;
      this._destinationPort = undefined;
      this._dscpCodePoints = undefined;
      this._hardwareTimestamp = undefined;
      this._historySize = undefined;
      this._inet6SourceAddress = undefined;
      this._movingAverageSize = undefined;
      this._name = undefined;
      this._oneWayHardwareTimestamp = undefined;
      this._probeCount = undefined;
      this._probeInterval = undefined;
      this._probeType = undefined;
      this._routingInstance = undefined;
      this._sourceAddress = undefined;
      this._targetType = undefined;
      this._targetValue = undefined;
      this._testInterval = undefined;
      this._traps = undefined;
      this._ttl = undefined;
      this._rpmScale.internalValue = undefined;
      this._thresholds.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataFill = value.dataFill;
      this._dataSize = value.dataSize;
      this._destinationInterface = value.destinationInterface;
      this._destinationPort = value.destinationPort;
      this._dscpCodePoints = value.dscpCodePoints;
      this._hardwareTimestamp = value.hardwareTimestamp;
      this._historySize = value.historySize;
      this._inet6SourceAddress = value.inet6SourceAddress;
      this._movingAverageSize = value.movingAverageSize;
      this._name = value.name;
      this._oneWayHardwareTimestamp = value.oneWayHardwareTimestamp;
      this._probeCount = value.probeCount;
      this._probeInterval = value.probeInterval;
      this._probeType = value.probeType;
      this._routingInstance = value.routingInstance;
      this._sourceAddress = value.sourceAddress;
      this._targetType = value.targetType;
      this._targetValue = value.targetValue;
      this._testInterval = value.testInterval;
      this._traps = value.traps;
      this._ttl = value.ttl;
      this._rpmScale.internalValue = value.rpmScale;
      this._thresholds.internalValue = value.thresholds;
    }
  }

  // data_fill - computed: false, optional: true, required: false
  private _dataFill?: string; 
  public get dataFill() {
    return this.getStringAttribute('data_fill');
  }
  public set dataFill(value: string) {
    this._dataFill = value;
  }
  public resetDataFill() {
    this._dataFill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFillInput() {
    return this._dataFill;
  }

  // data_size - computed: false, optional: true, required: false
  private _dataSize?: number; 
  public get dataSize() {
    return this.getNumberAttribute('data_size');
  }
  public set dataSize(value: number) {
    this._dataSize = value;
  }
  public resetDataSize() {
    this._dataSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSizeInput() {
    return this._dataSize;
  }

  // destination_interface - computed: false, optional: true, required: false
  private _destinationInterface?: string; 
  public get destinationInterface() {
    return this.getStringAttribute('destination_interface');
  }
  public set destinationInterface(value: string) {
    this._destinationInterface = value;
  }
  public resetDestinationInterface() {
    this._destinationInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInterfaceInput() {
    return this._destinationInterface;
  }

  // destination_port - computed: false, optional: true, required: false
  private _destinationPort?: number; 
  public get destinationPort() {
    return this.getNumberAttribute('destination_port');
  }
  public set destinationPort(value: number) {
    this._destinationPort = value;
  }
  public resetDestinationPort() {
    this._destinationPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortInput() {
    return this._destinationPort;
  }

  // dscp_code_points - computed: false, optional: true, required: false
  private _dscpCodePoints?: string; 
  public get dscpCodePoints() {
    return this.getStringAttribute('dscp_code_points');
  }
  public set dscpCodePoints(value: string) {
    this._dscpCodePoints = value;
  }
  public resetDscpCodePoints() {
    this._dscpCodePoints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpCodePointsInput() {
    return this._dscpCodePoints;
  }

  // hardware_timestamp - computed: false, optional: true, required: false
  private _hardwareTimestamp?: boolean | cdktf.IResolvable; 
  public get hardwareTimestamp() {
    return this.getBooleanAttribute('hardware_timestamp');
  }
  public set hardwareTimestamp(value: boolean | cdktf.IResolvable) {
    this._hardwareTimestamp = value;
  }
  public resetHardwareTimestamp() {
    this._hardwareTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hardwareTimestampInput() {
    return this._hardwareTimestamp;
  }

  // history_size - computed: false, optional: true, required: false
  private _historySize?: number; 
  public get historySize() {
    return this.getNumberAttribute('history_size');
  }
  public set historySize(value: number) {
    this._historySize = value;
  }
  public resetHistorySize() {
    this._historySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historySizeInput() {
    return this._historySize;
  }

  // inet6_source_address - computed: false, optional: true, required: false
  private _inet6SourceAddress?: string; 
  public get inet6SourceAddress() {
    return this.getStringAttribute('inet6_source_address');
  }
  public set inet6SourceAddress(value: string) {
    this._inet6SourceAddress = value;
  }
  public resetInet6SourceAddress() {
    this._inet6SourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inet6SourceAddressInput() {
    return this._inet6SourceAddress;
  }

  // moving_average_size - computed: false, optional: true, required: false
  private _movingAverageSize?: number; 
  public get movingAverageSize() {
    return this.getNumberAttribute('moving_average_size');
  }
  public set movingAverageSize(value: number) {
    this._movingAverageSize = value;
  }
  public resetMovingAverageSize() {
    this._movingAverageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get movingAverageSizeInput() {
    return this._movingAverageSize;
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

  // one_way_hardware_timestamp - computed: false, optional: true, required: false
  private _oneWayHardwareTimestamp?: boolean | cdktf.IResolvable; 
  public get oneWayHardwareTimestamp() {
    return this.getBooleanAttribute('one_way_hardware_timestamp');
  }
  public set oneWayHardwareTimestamp(value: boolean | cdktf.IResolvable) {
    this._oneWayHardwareTimestamp = value;
  }
  public resetOneWayHardwareTimestamp() {
    this._oneWayHardwareTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneWayHardwareTimestampInput() {
    return this._oneWayHardwareTimestamp;
  }

  // probe_count - computed: false, optional: true, required: false
  private _probeCount?: number; 
  public get probeCount() {
    return this.getNumberAttribute('probe_count');
  }
  public set probeCount(value: number) {
    this._probeCount = value;
  }
  public resetProbeCount() {
    this._probeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeCountInput() {
    return this._probeCount;
  }

  // probe_interval - computed: false, optional: true, required: false
  private _probeInterval?: number; 
  public get probeInterval() {
    return this.getNumberAttribute('probe_interval');
  }
  public set probeInterval(value: number) {
    this._probeInterval = value;
  }
  public resetProbeInterval() {
    this._probeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeIntervalInput() {
    return this._probeInterval;
  }

  // probe_type - computed: false, optional: true, required: false
  private _probeType?: string; 
  public get probeType() {
    return this.getStringAttribute('probe_type');
  }
  public set probeType(value: string) {
    this._probeType = value;
  }
  public resetProbeType() {
    this._probeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTypeInput() {
    return this._probeType;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // target_type - computed: false, optional: true, required: false
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  public resetTargetType() {
    this._targetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // target_value - computed: false, optional: true, required: false
  private _targetValue?: string; 
  public get targetValue() {
    return this.getStringAttribute('target_value');
  }
  public set targetValue(value: string) {
    this._targetValue = value;
  }
  public resetTargetValue() {
    this._targetValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetValueInput() {
    return this._targetValue;
  }

  // test_interval - computed: false, optional: true, required: false
  private _testInterval?: number; 
  public get testInterval() {
    return this.getNumberAttribute('test_interval');
  }
  public set testInterval(value: number) {
    this._testInterval = value;
  }
  public resetTestInterval() {
    this._testInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testIntervalInput() {
    return this._testInterval;
  }

  // traps - computed: false, optional: true, required: false
  private _traps?: string[]; 
  public get traps() {
    return cdktf.Fn.tolist(this.getListAttribute('traps'));
  }
  public set traps(value: string[]) {
    this._traps = value;
  }
  public resetTraps() {
    this._traps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapsInput() {
    return this._traps;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // rpm_scale - computed: false, optional: true, required: false
  private _rpmScale = new ServicesRpmProbeTestRpmScaleOutputReference(this, "rpm_scale");
  public get rpmScale() {
    return this._rpmScale;
  }
  public putRpmScale(value: ServicesRpmProbeTestRpmScale) {
    this._rpmScale.internalValue = value;
  }
  public resetRpmScale() {
    this._rpmScale.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpmScaleInput() {
    return this._rpmScale.internalValue;
  }

  // thresholds - computed: false, optional: true, required: false
  private _thresholds = new ServicesRpmProbeTestThresholdsOutputReference(this, "thresholds");
  public get thresholds() {
    return this._thresholds;
  }
  public putThresholds(value: ServicesRpmProbeTestThresholds) {
    this._thresholds.internalValue = value;
  }
  public resetThresholds() {
    this._thresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdsInput() {
    return this._thresholds.internalValue;
  }
}

export class ServicesRpmProbeTestList extends cdktf.ComplexList {
  public internalValue? : ServicesRpmProbeTest[] | cdktf.IResolvable

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
  public get(index: number): ServicesRpmProbeTestOutputReference {
    return new ServicesRpmProbeTestOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe junos_services_rpm_probe}
*/
export class ServicesRpmProbe extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_services_rpm_probe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicesRpmProbe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicesRpmProbe to import
  * @param importFromId The id of the existing ServicesRpmProbe that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicesRpmProbe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_services_rpm_probe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/services_rpm_probe junos_services_rpm_probe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicesRpmProbeConfig
  */
  public constructor(scope: Construct, id: string, config: ServicesRpmProbeConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_services_rpm_probe',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delegateProbes = config.delegateProbes;
    this._name = config.name;
    this._test.internalValue = config.test;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delegate_probes - computed: false, optional: true, required: false
  private _delegateProbes?: boolean | cdktf.IResolvable; 
  public get delegateProbes() {
    return this.getBooleanAttribute('delegate_probes');
  }
  public set delegateProbes(value: boolean | cdktf.IResolvable) {
    this._delegateProbes = value;
  }
  public resetDelegateProbes() {
    this._delegateProbes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegateProbesInput() {
    return this._delegateProbes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // test - computed: false, optional: true, required: false
  private _test = new ServicesRpmProbeTestList(this, "test", false);
  public get test() {
    return this._test;
  }
  public putTest(value: ServicesRpmProbeTest[] | cdktf.IResolvable) {
    this._test.internalValue = value;
  }
  public resetTest() {
    this._test.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delegate_probes: cdktf.booleanToTerraform(this._delegateProbes),
      name: cdktf.stringToTerraform(this._name),
      test: cdktf.listMapper(servicesRpmProbeTestToTerraform, true)(this._test.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delegate_probes: {
        value: cdktf.booleanToHclTerraform(this._delegateProbes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test: {
        value: cdktf.listMapperHcl(servicesRpmProbeTestToHclTerraform, true)(this._test.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicesRpmProbeTestList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
